window.addEventListener('DOMContentLoaded', event => {
    const board = document.getElementById('tic-tac-toe-board');


    board.addEventListener('click', event => {
            let eti = event.target.id
            if (eti === 'tic-tac-toe-board') {
                // console.log(eti)
            } else {
        const elem = eti;
        const xImage = document.createElement('img',)
                xImage.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'
                console.log(xImage.src)
        const oImage = document.createElement('img',)
                oImage.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'
                // console.log(eti)
            }
    })






})
