
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

//creates the player
const player = new Component(30, 30, 'white', 335, 325, ctx);

//creating the game
let game;

/* game.start(); */
const startBtn = document.getElementById('start-game');

startBtn.addEventListener('click', ()=>{
    if (!game){
    game = new Game(ctx, cWidth,cHeight, player);
    game.start();
    } else if (game && !game.isRunning){
        game.reset();
    };
});

document.addEventListener('keydown', (e)=>{
    switch(e.code){
        case 'ArrowUp':
            player.speedY -= 1;
         break;
        case 'ArrowDown':
            player.speedY += 1;
            break;
        case 'ArrowLeft':
            player.speedX -= 1;
            break;
        case 'ArrowRight':
            player.speedX += 1;
            break;

    };

    if(["ArrowUp","ArrowDown"].indexOf(e.code) > -1) {
        e.preventDefault()
    }
}, false);



document.addEventListener('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;

});
