export function isString(val: unknown): number | undefined {
  if (typeof val === 'string') {
    const parsed = +val
    return isNaN(parsed) ? undefined : parsed
  }
  if (typeof val === 'number') {
    return val
  }

  return undefined
}
