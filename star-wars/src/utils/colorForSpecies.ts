const colorPalette = [
  "#fde68a",
  "#bfdbfe",
  "#fbcfe8",
  "#fecaca",
  "#bbf7d0",
  "#e9d5ff",
  "#fff7ed",
];

function colorForSpecies(speciesName: string | undefined | null) {
    if (!speciesName) return colorPalette[0];
    const x = Array.from(speciesName).reduce((s, ch) => s + ch.charCodeAt(0), 0);
    return colorPalette[x % colorPalette.length];
}

export { colorForSpecies };