/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */

//outer array is the height of the maze
//inner array is the length of the mze

//once the function exits the stack frame the value is removed from the stack
//how do we save the recursive value?
//1: we can declare a GLOBAL variable OUTSIDE of the recursive function that each call pushes too
//
    function mazeSolver(maze, index = [0, 0]) {
      let solution="";
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
        //console.log("solution:", solution);
        //path.push(solution);
        return solution;
       //return path.join();//undefined is coming back from the first failed call
      }

      if (maze[row][col] === " "){ //peeking ahead to next position
         //console.log("lookToRight(" + goRight + ")");
        //maze[row][col] = "*"
        solution = "D" + mazeSolver(maze, goDown);
        solution = "R" + mazeSolver(maze, goRight);
        solution = "L" + mazeSolver(maze, goLeft);
        solution = "U" + mazeSolver(maze, goUp);
        //maze[row][col] = " ";
      }
      return solution;
      //return path[0];
          // if (maze[goDown] != "*"){ //peeking ahead to next position
          //   console.log("lookDown(" + goDown + ")");
          //   maze[row][col] = "*"
          //   solution += "D" + mazeSolver(maze, goDown);
          //   maze[row][col] = " ";
          // }
          // if (maze[goLeft] != "*"){ //peeking ahead to next position
          //   console.log("lookLeft(" + goLeft + ")");
          //   maze[row][col] = "*"
          //   mazeSolver(maze, goLeft, solution += "L");
          //   maze[row][col] = " ";
          // }
          // if (maze[goLeft] != "*"){ //peeking ahead to next position
          //   console.log("lookUp(" + goUp + ")");
          //   maze[row][col] = "*"
          //   mazeSolver(maze, goUp, solution += "U");
          //   maze[row][col] = " ";
          // }

          // mazeSolver(maze, goDown, solution += "D");
          // mazeSolver(maze, goLeft, solution += "L");
          // mazeSolver(maze, goUp, solution += "U");
        
  }
  let maze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

console.log(mazeSolver(maze, [0,0]));

module.exports = mazeSolver;

//----------------work from 12/29---------------------//
// if (maze[index[0]][index[1]] === "e"){
//   return "";
// }
// if (maze[index[0]][index[1]] === " "  &&
// maze[index[0]].length - maze[index[0]][index[1]] <=
// maze[index[0]].length) {
//     maze[index[0]++][index[1]];
//   solutionArray.push("R");
//    console.log(solutionArray);
//    console.log([[index[0]][index[1]]]);
//   mazeSolver(maze, [[index[0]], [index[0]]])
// }



    //if index maze[x, y] contains " " push R to solution array
    //if index maze[x, y] contains "*" return and restart
    //move down increment x++ (index [x+1, y])
    //if index maze[x, y] contains " " push D to solution array
    //if index maze[x, y] contains "*" return and restart
    //move left increment y-- (index [x, y - 1])
    //if index maze[x, y] contains " " push L to solution array
    //if index maze[x, y] contains "*" return and restart
    //move up increment x-- (index [x-1, y])
    //if index maze[x, y] contains " " push U to solution array
    //if index maze[x, y] contains "*" return and restart