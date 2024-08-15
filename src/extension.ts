import { ExtensionContext } from "vscode";
import { SkinTonePicker } from "./skintone/skinToneConfig";
import { Emojify } from "./emojify";
import { EmojiAutocomple } from "./autocomple";

export function activate(context: ExtensionContext) {
    SkinTonePicker(context);
    Emojify(context);
    EmojiAutocomple(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
