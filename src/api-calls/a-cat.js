export const aCat = async () => {
  const res = await fetch('https://aws.random.cat/meow');
  const payload = await res.json();
  const catUrl = payload.file;
  return catUrl;
};
