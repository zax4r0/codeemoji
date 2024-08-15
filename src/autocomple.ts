import {
    languages,
    TextDocument,
    Position,
    Range,
    CompletionItem,
    CompletionItemKind,
    ExtensionContext,
} from "vscode";
import skinTone from "./skintone/skintone";
import * as emoji from "node-emoji";
import { getSkinToneConfig } from "./skintone/skinToneConfig";

export const EmojiAutocomple = (context: ExtensionContext) => {
    const selectedSkinTone = getSkinToneConfig(context);

    const provider = languages.registerCompletionItemProvider(
        { scheme: "file", language: "*" },
        {
            provideCompletionItems(document: TextDocument, position: Position) {
                const linePrefix = document
                    .lineAt(position)
                    .text.substr(0, position.character);
                const match = /:([a-zA-Z0-9_+-]*)$/.exec(linePrefix);

                if (!match) {
                    return undefined;
                }

                const shortcode = match[1];
                const emojis = emoji.search(shortcode);

                if (!emojis || emojis.length === 0) {
                    return undefined;
                }

                const range = new Range(
                    position.line,
                    position.character - shortcode.length - 1,
                    position.line,
                    position.character,
                );

                return emojis.map((e) => {
                    const item = new CompletionItem(
                        `:${e.name}: ${skinTone(e.emoji, selectedSkinTone)}`,
                        CompletionItemKind.Text,
                    );
                    item.insertText = skinTone(e.emoji, selectedSkinTone);
                    item.range = range;
                    return item;
                });
            },
        },
        ":", // Trigger completion after typing ':'
    );

    context.subscriptions.push(provider);
};
