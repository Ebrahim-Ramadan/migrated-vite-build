export const copyToClipboard = async (text) => {
  await window.navigator.clipboard.writeText(text)
}