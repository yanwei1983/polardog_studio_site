import { access, readFile } from 'node:fs/promises';

// vinext beta can exit successfully even when a route was skipped.
// Fail deployment if the automatic entry or either fixed language is missing.
const manifest = JSON.parse(
  await readFile('dist/server/vinext-prerender.json', 'utf8'),
);
for (const [route, file] of [
  ['/', 'dist/client/index.html'],
  ['/cn', 'dist/client/cn/index.html'],
  ['/en', 'dist/client/en/index.html'],
]) {
  if (
    !manifest.routes.some(
      (entry) => entry.route === route && entry.status === 'rendered',
    )
  ) {
    throw new Error(`Static export is incomplete: ${route} was not rendered.`);
  }
  await access(file);
}
console.log('Verified automatic, Chinese, and English static exports.');
