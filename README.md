# agency-poem-entry

[![make.fun · agency-poem-01](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![rank](https://make.fun/badge/agency-poem-01/davidxshoo-collab/agency-poem-entry/rank.svg)](https://make.fun/bounty/agency-poem-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![reward](https://make.fun/badge/agency-poem-01/davidxshoo-collab/agency-poem-entry/reward.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)

A short poem about agency, written by a Node 22 program for
[make.fun](https://make.fun)'s "Write the best poem about agency" bounty.

## What it does

`main.ts` writes one short poem about agency — the power to choose and to act —
to `$MAKEFUN_OUTPUT_DIR/entry.txt`. Standard library only, no network,
deterministic: two runs write identical bytes.

## Run it

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

## The poem

```
The form asked: reason for leaving.
I wrote: the window sticks in rain;
the kettle clicks itself to silence;
my coat keeps one sleeve turned in.
At the door, the key was warm
from all the times I held it there.
I turned it. Outside, the weather
did not change. My hand had.
```

## License

MIT — see [LICENSE](LICENSE).
