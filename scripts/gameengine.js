class Game {
    constructor(ctx, width, height, player, difficulty ){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.obstacles = [];
        this.interval = null;
        this.frames = 31 * 60;
        this.isRunning = false;
        this.points = 0;
        this.difficulty = difficulty;
    }
    start(){
        this.interval = setInterval(this.updateGameArea, 1000 / 60) //60fps (1000 / 60)
        this.isRunning = true;
    }

    clear(){
        this.ctx.clearRect(0,0,this.width, this.height);
    }

    reset = () => {
        this.obstacles = [];
        this.player.x=310;
        this.player.y=290;
        this.frames= 31 * 60;
        this.points = 0;
        this.difficulty = 0;
        this.start();
    };

    stop(){
        if(this.frames === 0){
            clearInterval(this.interval);
            this.isRunning = false;
        }
};


    updateObstacles(){
        if(this.frames % this.difficulty === 0){
            this.obstacles.push(
                new Component(30, 30, 'green', Math.floor(Math.random() * this.width) - 30, Math.floor(Math.random() * this.height) - 30, this.ctx)
                )
        }
        for(let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].y += 1
            this.obstacles[i].enemieDraw();
    };
    };


    checkPoint = () =>{
        const crashed = this.obstacles.some((obstacles) => {

        if( player.crashWith(obstacles)){
            this.obstacles.splice(this.obstacles.indexOf(obstacles), 1);
            return true;
        };
        });
        if(crashed){
            this.points++
    };
    };

    timer(){
        let timer = Math.floor(this.frames / 60) 
        this.ctx.font = '24px SilkscreenNormal'
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Time: ${timer}`, 500, 50);
    };

    score(){
        let points = this.points;
        this.ctx.font = '24px SilkscreenNormal'
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score: ${points}`, 500, 80);
    };

    printGameOver(){
        if(this.isRunning === false){
        this.ctx.font = '70px SilkscreenNormal'
        this.ctx.fillStyle = 'green';
        this.ctx.fillText(`Game Over`, 100, 250);
        }
    }

    updateGameArea = () => {
        this.frames--;
        this.stop();
        this.clear();
        this.updateObstacles();
        this.player.newPos();
        this.player.playerDraw();
        this.checkPoint();
        this.timer();
        this.score();
        this.printGameOver()
    }

}