// Vice City Payday — a gta6-meme-x-01 entry (Node 22, standard library only).
//
// The whole job of this program is to hand POST.json to the gate: read it
// from the repository root and write it, byte for byte, into the output
// directory. The meme itself lives in the X post that POST.json names, so
// nothing here is judged — the file just has to arrive intact.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// MAKEFUN_BOT_DIR defaults to /bot and MAKEFUN_OUTPUT_DIR to /output, the
// paths the grader mounts. On success the program prints nothing.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

let text: string;
try {
  text = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// The address has to be a real X status URL, or the house cannot find the
// post: https://x.com/<handle>/status/<digits>, with an optional trailing
// slash. A placeholder or a mistyped address fails here instead of being
// copied on blindly.
let address: unknown;
try {
  address = JSON.parse(text);
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}
const urlPattern = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+\/?$/;
if (
  typeof address !== 'object' ||
  address === null ||
  typeof (address as { url?: unknown }).url !== 'string' ||
  !urlPattern.test((address as { url: string }).url)
) {
  console.error('POST.json url must be an X status URL like https://x.com/<handle>/status/<id>');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, text, 'utf8');
