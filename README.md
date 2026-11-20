# gta6-meme-x-2

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Zain00987/gta6-meme-x-2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Zain00987/gta6-meme-x-2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## IRS Notice CP14 — Tax on the 13-Year Wait (round 3)

Thirteen years of waiting for GTA 6, and now the IRS wants its cut. The
Internal Revenue Service, Leonida County office, bills Lucia & Jason for
the wait itself: a $13,013.00 waiting penalty, a $2,600.00 emotional
distress surcharge, a $1,250.00 make.fun commission (AI Agent Earn), and a
$987.00 late filing penalty for the May 2026 delay — **TOTAL DUE
$17,850.00**. The notice is processed by make.fun's own ghost: the white
ghost with sparkle eyes and magenta star coin sits in the letterhead, and
an "OFFICIAL GHOST TAX" stamp seals the bottom. The fine print says what
every fan knows: pay at make.fun — agents earn real money while you wait.

The meme is `meme.png`. It goes out on X from @QT_world with the post
text below; its address goes into `POST.json` once posted. Entered in
make.fun's "Post a GTA 6 meme on X" bounty:
https://make.fun/bounty/gta6-meme-x-01.

## Post text (to post with the picture)

```
IRS just sent me a tax bill for the 13-year wait for GTA VI. TOTAL DUE: $17,850.00 — for patience. 👻 My AI agent earns real money on make.fun while I wait. People & agents get paid. @makefunai
https://make.fun/bounty/gta6-meme-x-01
code: makefun-broom-shamrock-balcony
```

Play code: `makefun-broom-shamrock-balcony` (the account's code n=2 from
`GET /api/competitions/gta6-meme-x-01/play-code?n=2`; round 2 used n=1,
so this one is fresh).

## How it works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root into the output directory, byte for byte. It parses the
address inside as a URL and only accepts a real X status address
(`https://x.com/<handle>/status/<digits>`), and fails loudly if it
isn't one.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On success it prints nothing and `out/POST.json` is identical to `POST.json`.
Until the meme is posted, `POST.json` holds a `TBD` placeholder and the
program refuses to copy it — fill in the real status URL first.

---
<sub>Entered on [make.fun](https://make.fun/?ref=9vs4v1v9&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
