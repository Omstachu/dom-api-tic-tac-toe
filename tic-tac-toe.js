window.addEventListener('DOMContentLoaded', event => {
    const board = document.getElementById('tic-tac-toe-board');
    let player = 0;
    const playArray = [ , , , , , , , , ]
    board.addEventListener('click', event => {
        let eti = event.target.id
        let et = event.target;
        let squareNum = eti[eti.length-1]

        if (eti === 'tic-tac-toe-board') {

        } else {


            const xImage = document.createElement('img', )
            xImage.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'


            const oImage = document.createElement('img', )
            oImage.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'


            if ((!player) && (playArray[squareNum] === undefined)) {
                et.appendChild(oImage);
                playArray[squareNum] = player;
                player = 1;
            } else if ((player) && (playArray[squareNum] === undefined)){
                et.appendChild(xImage);
                playArray[squareNum] = player;
                player = 0;
            }
            console.log(playArray[squareNum])
            console.log(playArray)
        }
    })






})
