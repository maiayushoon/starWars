function parseMass(kg: string) {
  if (!kg || kg === "unknown") return "unknown";
  const cleaned = kg.replace(/,/g, "");
  const n = parseFloat(cleaned);
  if (Number.isNaN(n)) return "unknown";
  return `${n} kg`;
}

export { parseMass };