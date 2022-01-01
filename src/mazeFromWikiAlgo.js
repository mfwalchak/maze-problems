let wasHere = new Boolean[width][height];
let correctPath = new Boolean[width][height];

function mazeSolver(maze, index = [0,0]){
  for (let row = 0; row < maze.length; row++){
    for (let col = 0; col < maze[row].length; col++){
      wasHere[row][col] = false;
      correctPath[row][col] = false;
    }
  }
  recursiveSolution(index[0], index[1])
}

function recursiveSolution(x, y){
  if (x == endX && y == endY) return true;

  if (maze[x][y] || wasHere[x][y]) return false;

  if (wasHere[x][y] = true) {
    if (x != 0){
      if (recursiveSolution(x-1, y)) {
        correctPath[x][y] = true;
        return true;
      }
    }
    if (x != maze.length - 1){
      if (recursiveSolution(x+1, y)) {
        correctPath[x][y] = true;
        return true;
      }
    }
    if (y != 0){
      if (recursiveSolution(x, y-1)) {
        correctPath[x][y] = true;
        return true;
      }
    }
    if (y != maze[x].length - 1){
      if (recursiveSolution(x-1, y)) {
        correctPath[x][y] = true;
        return true;
      }
    }
    return false;
  }
}