# VS Code Emoji Extension

Welcome to the **VS Code Emoji Extension**! This extension allows you to enhance your development experience by managing and customizing emoji skin tones directly within Visual Studio Code. You can set your preferred skin tone, use emojis in your code, and more.

## Features

- **Set Emoji Skin Tone**: Choose your preferred emoji skin tone and see it reflected in the status bar.
- **Quick Pick Menu**: Easily select from a variety of skin tones with corresponding emojis.
- **Emoji Replacement**: Automatically replace text with emojis in your code.

## Installation

To install this extension, follow these steps:

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for `VS Code Emoji Extension`.
4. Click `Install`.

## Usage

### Set Emoji Skin Tone

1. Click on the emoji icon in the status bar at the bottom-right corner of VS Code.
2. A Quick Pick menu will appear with different skin tone options.
3. Select your preferred skin tone from the list.

The selected skin tone will be updated in the status bar, and all future emoji-related operations will use the chosen skin tone.

### Emojify Text

To replace text with emojis:

1. Highlight the text you want to convert.
2. Use the command palette (`Ctrl+Shift+P`) and search for `Emojify Text`.
3. The selected text will be replaced with the corresponding emoji.

## Configuration

You can configure the emoji skin tone by modifying the `codeemoji.skinTone` setting:

- **white**: Light skin tone (👍🏻)
- **creamWhite**: Medium-Light skin tone (👍🏼)
- **lightBrown**: Medium skin tone (👍🏽)
- **darkBrown**: Medium-Dark skin tone (👍🏾)
- **brown**: Dark skin tone (👍🏿)
- **none**: No skin tone (👍)

To change the setting:

1. Open the Command Palette (`Ctrl+Shift+P`).
2. Type `Preferences: Open Settings (JSON)`.
3. Add or modify the `codeemoji.skinTone` setting with your preferred value.

```json
"codeemoji.skinTone": "lightBrown"
```

## Emoji List

Here are some of the emojis available:

- 😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇
- 🙃 🙂 🙃 🤗 🤔 🤐 🤨 🤩 🧐
- 😎 🤓 🤠 🤡 🤥 🤒 🤕 🤗 🤔
- 😍 🥰 😘 😗 😙 😚 😋 😛 😝
- 🤑 🤤 🤤 😶 😶‍🌫️ 🙄 😮 🤐 🤔
- 🤩 🥳 😎 😍 🤔 🤐 🤢 🤮 🤧
- 😴 💤 😪 😫 😤 😠 😡 🤬 🤯
- 😳 😱 😨 😰 😥 😢 😭 😓 😩
- 😔 😕 🙁 ☹️ 😣 😖 😫 😩 😤
- 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵
- 🥶 😱 😨 😰 😥 😢 😭 😓 😩

For a more comprehensive list, refer to the Unicode Emoji List or [Emojipedia](https://emojipedia.org/).

## Contributing

If you would like to contribute to the development of this extension, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork locally.
3. Make your changes and test thoroughly.
4. Create a pull request with a clear description of the changes.

## License

This extension is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Feedback

If you have any feedback, issues, or feature requests, please open an issue on the [GitHub repository](https://github.com/yourusername/vscode-emoji-extension).
