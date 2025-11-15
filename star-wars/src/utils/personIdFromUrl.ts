function personIdFromUrl(url: string) {
  const m = url.match(/\/(\d+)\/?$/);
  return m ? m[1] : Math.random().toString(36).slice(2, 8);
}

export { personIdFromUrl };