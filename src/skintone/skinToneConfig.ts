import { commands, ExtensionContext, window, workspace } from "vscode";
import skinTone, { SkinToneType } from "./skintone";
import { skinToneOptions } from "./consts";
import { EmojiStatusBarItem } from "./skinToneStatusbar";

export const getSkinToneConfig = (_ctx?: ExtensionContext): SkinToneType => {
    const config = workspace.getConfiguration("codeemoji");
    const selectedSkinTone: SkinToneType =
        config.get<SkinToneType>("skinTone") || "none";

    return selectedSkinTone;
};

export const setSkinToneConfig = async (
    skinTone: SkinToneType,
    _ctx?: ExtensionContext,
): Promise<void> => {
    const config = workspace.getConfiguration("codeemoji");
    await config.update("skinTone", skinTone, true);
};

export const SkinTonePicker = (context: ExtensionContext): void => {
    // Create and show a status bar item
    const statusBarItem = EmojiStatusBarItem(context);
    // Register command for setting skin tone
    const setSkinToneCommand = commands.registerCommand(
        "emoji.setSkinTone",
        async () => {
            const chosenOption = await window.showQuickPick(skinToneOptions, {
                placeHolder: "Choose your preferred emoji skin tone",
            });

            if (chosenOption) {
                const selectedValue: SkinToneType = chosenOption.value;
                await setSkinToneConfig(selectedValue, context);
                statusBarItem.text = skinTone("👍", selectedValue);
                window.showInformationMessage(
                    `Emoji skin tone set to ${skinTone("👍", selectedValue)}`,
                );
            }
        },
    );
    context.subscriptions.push(setSkinToneCommand);
};
