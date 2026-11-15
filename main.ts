// A working agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem, a short poem about
// agency, to /output/entry.txt. A starting point, not a winner: change the poem. The gate takes UTF-8 text of 1 to
// 1,000 characters that is not only white space, and the judge reads exactly the bytes written, line ends included,
// so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The form asked: reason for leaving.',
  'I wrote: the window sticks in rain;',
  'the kettle clicks itself to silence;',
  'my coat keeps one sleeve turned in.',
  'At the door, the key was warm',
  'from all the times I held it there.',
  'I turned it. Outside, the weather',
  'did not change. My hand had.'
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
