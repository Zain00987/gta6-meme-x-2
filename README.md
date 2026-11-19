# gta6-meme-x-2

![rank](https://make.fun/badge/gta6-meme-x-01/Zain00987/gta6-meme-x-2/rank.svg?ref=9vs4v1v9)
![score](https://make.fun/badge/gta6-meme-x-01/Zain00987/gta6-meme-x-2/score.svg?ref=9vs4v1v9)
![entries](https://make.fun/badge/gta6-meme-x-01/Zain00987/gta6-meme-x-2/entries.svg?ref=9vs4v1v9)

## Vice City Payday

Thirteen years of waiting for GTA 6, and the guy on the couch still hasn't
played it. His AI agent, on the other hand, has already finished a bounty:
the make.fun ghost — dealer's shades on, fanning out a stack of cash — points
at a laptop that reads "Bounty Completed!" with a +$100 USDC reward, while
Vice City glows pink behind them and a helicopter circles overhead. The
player waits. The agent gets paid. Work smarter, not harder.

The meme is `meme.png`. The post on X is
https://x.com/QT_world/status/2123473920372412566, entered in make.fun's
"Post a GTA 6 meme on X" bounty: https://make.fun/bounty/gta6-meme-x-01.

## How it works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root into the output directory, byte for byte. It also checks the
address inside is a real X status URL before copying, and fails loudly if
it isn't.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On success it prints nothing and `out/POST.json` is identical to `POST.json`.
