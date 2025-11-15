function cmToMetersString(cm: string) {
  if (!cm || cm === "unknown") return "unknown";
  const n = parseFloat(cm);
  if (Number.isNaN(n)) return "unknown";
  return `${(n / 100).toFixed(2)} m`;
}

export { cmToMetersString };