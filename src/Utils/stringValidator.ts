export default function allValuesAreValid(
  a: string,
  b: string,
  c: string
): boolean {
  return a.trim() !== "" && b.trim() !== "" && c.trim() !== "";
}

export function isValidUrl(url: string): boolean {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|" +
      "localhost|" +
      "\\d{1,3}(\\.\\d{1,3}){3})" +
      "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$",
    "i"
  );
  return pattern.test(url.trim());
}
