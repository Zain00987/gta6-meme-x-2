// IRS Notice CP14 — a gta6-meme-x-01 entry (Node 22, standard library only).
//
// The meme itself is the X post that POST.json names, so this program has
// one job: hand POST.json to the gate untouched. It reads the file from the
// repository root, checks the address inside is a real X status URL, and
// writes the same bytes into the output directory. Anything else is a
// loud failure, never a silent bad copy.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// MAKEFUN_BOT_DIR defaults to /bot and MAKEFUN_OUTPUT_DIR to /output, the
// paths the grader mounts. On success the program prints nothing.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

function readPostFile(path: string): string {
  try {
    return readFileSync(path, 'utf8');
  } catch (err) {
    fail(`cannot read ${path}: ${(err as Error).message}`);
  }
}

// An X status address is https://x.com/<handle>/status/<digits>, with an
// optional trailing slash and nothing after it. Parse it as a URL instead
// of pattern-matching the string, so a mistyped host, a missing status id
// or a query string fails here rather than being copied on blindly.
function isStatusUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }
  if (parsed.protocol !== 'https:') return false;
  if (parsed.hostname !== 'x.com') return false;
  if (parsed.search !== '' || parsed.hash !== '') return false;
  const parts = parsed.pathname.split('/').filter((part) => part !== '');
  return (
    parts.length === 3 &&
    /^[A-Za-z0-9_]+$/.test(parts[0]) &&
    parts[1] === 'status' &&
    /^\d+$/.test(parts[2])
  );
}

const raw = readPostFile(join(botDir, 'POST.json'));

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  fail('POST.json is not valid JSON');
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof parsed !== 'object' || parsed === null) {
  fail('POST.json must be a JSON object with a url field');
}
if (!isStatusUrl(url)) {
  fail(
    'POST.json url must be an X status URL like https://x.com/<handle>/status/<id>',
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), raw, 'utf8');
