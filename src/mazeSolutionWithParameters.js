    function mazeSolver(maze, index = [0, 0], path=[], solution="") {
      let row = index[0];//value 0, references outer array
      let col = index[1];//value 0, references inner array
      let goRight = [row, col + 1];
      let goDown = [row + 1, col];
      let goLeft = [row, col - 1];
      let goUp = [row - 1, col];

      if (row < 0 || col < 0 || row >= maze.length || col >= maze[0].length || maze[row][col] === "*"){
        return;
      }
      if (maze[row][col] === "e"){
        console.log("solution:", solution);
        console.table(maze);
        path.push(solution);
        return path.join();
      }
      if (maze[row][col] === " "){
        maze[row][col] = "*"
        mazeSolver(maze, goDown, path, solution + "D");
        mazeSolver(maze, goRight, path, solution + "R");
        mazeSolver(maze, goLeft, path, solution + "L")
        mazeSolver(maze, goUp, path, solution + "U")
        maze[row][col] = " ";
      }
      return path[0];
}

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeSolver(maze, [0,0]))

module.exports = mazeSolver;