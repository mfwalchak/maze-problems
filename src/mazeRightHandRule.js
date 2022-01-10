//to move down the in the maze increment the row by 1
//to move right incrmeent the column by 1

function mazeSolver(maze, index = [0, 0]){
    let row = index[0];
    let col = index[1];

    //keeping the right "hand" placed on the wall
    //look left, if on the maze wall ("*" or out of bounds), attempt to move down
        //if cannot move down, move right
        //move down
        //if cannot move down, move right
        //move down.... etc

    //if move down, look left, if on the maze wall, attempt to move down
    //if move down, look left
        //if on the maze wall continue to move down
        //if the space to the left has opened up, move left
    //look to left, if space is open move left
        //else if wall or "*" move down
    //continue until find a space marked "e"

}

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//expected solution:RRDDLLDDRRRRRR

console.log(mazeSolver(maze, [0,0]))