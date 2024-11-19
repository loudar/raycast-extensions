import { Clipboard, getPreferenceValues, openCommandPreferences, showHUD, updateCommandMetadata } from "@raycast/api";
export default async function main() {
  const { text, file, html } = await Clipboard.read();
  if (text) {
    await updateCommandMetadata({ subtitle: `Pasting: ${text}` });

    return Clipboard.paste(text);
  }

  await openCommandPreferences();
  return await showHUD("❌ Please set a text to paste");
}
