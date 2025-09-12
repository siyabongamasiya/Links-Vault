export default function csvToArray(input: string): string[] | null {
  const trimmed = input.trim();
  if (
    trimmed.startsWith(",") ||
    trimmed.endsWith(",") ||
    trimmed.includes(",,")
  ) {
    alert("Invalid format! Please provide a properly comma-separated string.");
    return null;
  }

  return trimmed.split(",").map((item) => item.trim());
}
