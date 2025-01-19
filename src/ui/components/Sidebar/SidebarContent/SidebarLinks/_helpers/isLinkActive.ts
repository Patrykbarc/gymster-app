export function isLinkActive(href: string, currentPath: string): boolean {
  const hrefSegments = href.split('/')
  const hrefLastSegment = hrefSegments[hrefSegments.length - 1]

  return currentPath === hrefLastSegment
}
