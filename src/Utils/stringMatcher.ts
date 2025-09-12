function stringMatcher(text: string, pattern: string): boolean {
  if (text === "") {
    return true;
  }
  const regex: RegExp = new RegExp(pattern, "i");
  return regex.test(text);
}

export default stringMatcher;
