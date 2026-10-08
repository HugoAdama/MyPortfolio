/**
 * Safely resolves an asset or route URL relative to Astro's base path.
 * Guarantees exactly one forward slash between the base and the asset path,
 * preventing broken image, favicon, and download links in both dev and production.
 */
export function getAssetPath(path: string = ''): string {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('#') ||
    path.startsWith('mailto:')
  ) {
    return path;
  }
  const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const cleanPath = path.replace(/^\//, '');
  return `${base}${cleanPath}`;
}
