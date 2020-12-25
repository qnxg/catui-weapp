const REGEXP = /^-?\d+(\.\d+)?$/;

export function addUnit(
  value: string | number | undefined
): string | undefined {
  if (typeof value === 'undefined') {
    return undefined;
  }

  console.log(REGEXP.test('' + value));

  return REGEXP.test('' + value) ? value + 'px' : value + '';
}
