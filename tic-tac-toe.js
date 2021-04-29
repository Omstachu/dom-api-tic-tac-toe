window.addEventListener('DOMContentLoaded', event => {
    const board = document.getElementById('tic-tac-toe-board');
    let player = 0;

    board.addEventListener('click', event => {
        let eti = event.target.id
        let et = event.target;

        if (eti === 'tic-tac-toe-board') {
            // console.log(eti)
        } else {
            // const elem = eti;

            const xImage = document.createElement('img', )
            xImage.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg'

            // console.log(xImage.src)
            const oImage = document.createElement('img', )
            oImage.src = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg'
                // console.log(eti)


            // et.appendChild(xImage);
            console.log(Object.values(et));
            // console.log(document.querySelectorAll("played"))
            // console.log(et.className);
            // if (et === xImage.src || et === oImage.src) {
            //     console.log('gut');
            // }
            if (!player) {
                et.appendChild(oImage);
                // et.classList.add("played")
                player = 1;
            } else {
                et.appendChild(xImage);
                player = 0;
                // et.classList.add("played")
            }

        }
    })






})