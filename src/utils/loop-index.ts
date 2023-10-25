// ensure index is within valid range, looping when necessary
export default (arr: string | unknown[], i: number): number =>
  !arr.length ? 0 : ((i % arr.length) + arr.length) % arr.length;
