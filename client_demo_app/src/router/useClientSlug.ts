/**
 * Returns the client slug for the current request.
 *
 * Resolution order:
 *   1. ?client=<slug>  — local dev convenience
 *   2. First subdomain label  — production (e.g. pizza-palace.yourdomain.com → "pizza-palace")
 *   3. Empty string if neither applies
 */
export function useClientSlug(): string {
  const params = new URLSearchParams(window.location.search);
  const paramSlug = params.get('client');
  if (paramSlug) return paramSlug;

  const parts = window.location.hostname.split('.');
  // At least 3 parts means there is a subdomain (subdomain.domain.tld)
  if (parts.length >= 3) {
    return parts[0];
  }

  return '';
}
