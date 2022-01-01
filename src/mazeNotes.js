//when you start solving a problem think about your constraints

function mazeSolver(maze, index=[0,0], path = ""){
    //first we need a way to store our travelled path and allow it to be accessed
    //in recursive iterations of the function

    //destructure row and column
    const [row, col] = index;

    //base cases
    if (row < 0 || col < 0 || row >= maze.length || col >= maze[0].length || maze[row][col] === "*"){
        return;
    }
    if (maze[row][col] === "e"){
        console.log(path); //return correct solution
        console.table(maze);
        return path;
    }
    //recursive case
    if (maze[row][col]=== " "){ //if we see an empty location we recurse, if anything is in it no recursion
        maze[row][col] = "X" //marks current location
        mazeSolver(maze, [row, col + 1], path + "R")
        mazeSolver(maze, [row, col - 1], path + "L")
        mazeSolver(maze, [row + 1, col], path + "D")
        mazeSolver(maze, [row - 1, col], path + "U")
        maze[row][col] = " ";//clear the previously marked spot after recursion
    }
}

mazeSolver(maze);