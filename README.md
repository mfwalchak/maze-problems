# Maze Problems

I enjoy learning different ways to solve maze problems using logic. This repo collects different approaches to maze-solving as I work through them.


1/1/2022: mazeSolutionWithParameters.js
Brute-force recursive algorithm that returns all possible solution paths in an NxN matrix where " " represents a passage and "\*" represents a blocked passage.
Begin at upper-left corner (0,0) and exit maze at "e".
This solution uses both an array and a string passed into recursive function calls as persistent storage.

┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │  3  │  4  │  5  │  6  │
├─────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│    0    │ ' ' │ ' ' │ ' ' │ '*' │ ' ' │ ' ' │ ' ' │
│    1    │ '*' │ '*' │ ' ' │ '*' │ ' ' │ '*' │ ' ' │
│    2    │ ' ' │ ' ' │ ' ' │ ' ' │ ' ' │ ' ' │ ' ' │
│    3    │ ' ' │ '*' │ '*' │ '*' │ '*' │ '*' │ ' ' │
│    4    │ ' ' │ ' ' │ ' ' │ ' ' │ ' ' │ ' ' │ 'e' │
└─────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
solution: RRDDLLDDRRRRRR
          RRDDRRRRDD
          RRDDRRUURRDDDD
