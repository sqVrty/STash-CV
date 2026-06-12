/**
 * Resolves a path that lives in the `public` folder against the app's base URL.
 *
 * On GitHub Pages the app is served from a sub-path (e.g. `/STash-CV/`), so
 * absolute paths like `/workExamples/foo.jpeg` must be prefixed with that base
 * to avoid 404s. Assets imported as ES modules are handled by Vite automatically
 * and don't need this helper.
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
