<div markdown="fileTab.file.challenge.instructions" class="markdown collapsed"><h1>Searching and sorting: Recursion drills—Maze</h1><p> In this challenge, you will solve a problem using recursion. The objective is to practice using recursion to think about and solve problems. You do not have to worry about the efficiency of your solutions.</p>
<h2>Existing files</h2><table>
<thead>
<tr>
<th><strong>File</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>__tests__/maze.test.js</code></td>
<td>Contains tests for the maze problem. You are welcome to look at this file, but do not modify it.</td>
</tr>
<tr>
<td><code>src/maze.js</code></td>
<td>Write your solutions to the maze problem in this file.</td>
</tr>
</tbody>
</table>
<h2>Find a way out of the maze</h2><p>You have entered a maze and need to find your way out of it. There is more than one possible path through the maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.</p>
<p>You can use the following mazes to test your program.</p>
<pre><code>let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
</code></pre><p>The maze is represented as an N x M matrix (in the above case, a 3x3 or a 5x7 array). The starting point is the top-left corner, and the exit is indicated by <code>e</code>. You can't go outside the boundaries of the maze. The maze has passages that are blocked, and you can't go through them. These blocked passages are indicated by <code>*</code>. Passing through a blocked cell as well as passing through a cell that you have already passed before are forbidden.</p>
<p>For the above maze, a possible exit path can be <code>RRDDLLDDRRRRRR</code>.</p>
<p>Write a function that accepts a two-dimensional array for the maze and an array with two values for the current position in the maze. For example, you may call the function like this: <code>mazeSolver(maze, [0, 0])</code> to indicate that the starting position is at the top-left corner.</p>
</div>