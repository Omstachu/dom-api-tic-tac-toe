window.addEventListener('DOMContentLoaded', event => {
    const board = document.getElementById('tic-tac-toe-board');
    let player = 0;
    const playArray = [2, 2, 2, 2, 2, 2, 2, 2, 2]

    // check the for in loop to see if a player has won
    // winning condition not being met, needs to be refactored


    const compareArray = function(array, moves) {
        let winner;
        // console.log(array);
        // console.log(moves);
        for (let moveSet in moves) {
            // console.log(array[moveSet[0]])
            let move = moves[moveSet];
            // console.log(move);
            console.log(array[move[0]])
            if (array[move[0]] === array[move[1]] === array[move[2]]) {
                winner = array[move[0]];
                console.log("dogfart");
            }
        }
        // return winner;
    }

    const winningMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    board.addEventListener('click', event => {
        let eti = event.target.id;
        let et = event.target;
        let squareNum = eti[eti.length - 1];

        if (eti === 'tic-tac-toe-board') {

        } else {




            const xImage = document.createElement('img', )
            xImage.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'


            const oImage = document.createElement('img', )
            oImage.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'


            if ((!player) && (playArray[squareNum] !== undefined)) {
                et.appendChild(oImage);
                playArray[squareNum] = player;
                player = 1;
            } else if ((player) && (playArray[squareNum] !== undefined)) {
                et.appendChild(xImage);
                playArray[squareNum] = player;
                player = 0;
            }
            // console.log(squareNum);
            // console.log(playArray[squareNum])
            // console.log(playArray)

            // console.log(compareArray(playArray, winningMoves));
            compareArray(playArray, winningMoves);
        }
    })

})