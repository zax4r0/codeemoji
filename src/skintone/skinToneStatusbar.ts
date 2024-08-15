import {
    window,
    StatusBarAlignment,
    ExtensionContext,
    StatusBarItem,
} from "vscode";
import skinTone from "./skintone";
import { getSkinToneConfig } from "./skinToneConfig";

export const EmojiStatusBarItem = (ctx: ExtensionContext): StatusBarItem => {
    const statusBarItem = window.createStatusBarItem(
        StatusBarAlignment.Right,
        100,
    );
    statusBarItem.text = skinTone("👍", getSkinToneConfig()); // Set initial text to the default skin tone
    statusBarItem.tooltip = "Click to set emoji skin tone";
    statusBarItem.command = "emoji.setSkinTone"; // Command to trigger skin tone setting
    statusBarItem.show();

    ctx.subscriptions.push(statusBarItem);

    return statusBarItem;
};
