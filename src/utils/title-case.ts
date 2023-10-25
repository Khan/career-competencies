export default (str: string) => str.replace(/\b\w/g, (s) => s.toUpperCase());
