type RecursiveArray = Array<RecursiveArray | number | undefined>;

export function flatten(arr: RecursiveArray, priorRes?: number[]): number[] {
  const res: number[] = priorRes || [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flatten(item, res);
    } else if (item !== undefined) {
      res.push(item);
    }
  })
  return res;
}
