import { commands, ExtensionContext, window } from "vscode";
import skinTone from "./skintone/skintone";
import { getSkinToneConfig } from "./skintone/skinToneConfig";
import * as emoji from "node-emoji";

export const Emojify = (context: ExtensionContext) => {
    const selectedSkinTone = getSkinToneConfig(context);

    const emojifyTextCommand = commands.registerCommand(
        "emoji.emojifyText",
        () => {
            const editor = window.activeTextEditor;
            if (editor) {
                const document = editor.document;
                const selection = editor.selection;
                const text = document.getText(selection);
                const emojifiedText = emoji.emojify(text);
                editor.edit((editBuilder) => {
                    editBuilder.replace(
                        selection,
                        skinTone(emojifiedText, selectedSkinTone),
                    );
                });
            }
        },
    );

    context.subscriptions.push(emojifyTextCommand);
};
