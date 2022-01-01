function printSolution(sol){
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++){
            console.log(" " + sol[i][j] + " ");
        }
    }
}

function isSafe(maze, x, y){
    return (x >= 0 && x < N && 
            y >= 0 && y < N && 
            maze[x][y] ==1);
}

function mazeSolver(maze, [x=0,y=0]){
    if (Array.isArray(maze)){
        let solution = new Array(N);
        for(let i = 0; i < N; i++){
            sol[i]=new Array(N);
            for(let j = 0; j < N; j++){
                sol[i][j]=0;
            }
        }
        if (solveMazeUtil(maze, 0, 0, sol) == false){
            console.log("Solution doesn't exist");
            return false;
        }
        printSolution(sol);
        return true;
    }
}

function solveMazeUtil(maze, x, y, sol){
    if (x == N - 1 && y == N - 1 &&
        maze[x][y] = 1){
        return true;
        }
}
