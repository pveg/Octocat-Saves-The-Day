class Game {
    constructor(ctx, width, height, player, color){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.obstacles = [];
        this.interval = null;
        this.frames = 31 * 60;
        this.isRunning = false;
        this.points = 0;
        this.color = color;
    }
    start(){
        this.interval = setInterval(this.updateGameArea, 1000 / 60) //60fps (1000 / 60)
        this.isRunning = true;
    }

    clear(){
        this.ctx.clearRect(0,0,this.width, this.height);
    }

    reset = () => {
        this.player.x=335;
        this.player.y=325;
        this.frames=31 * 60;
        this.obstacles = [];
        this.points = 0;
        this.start();
    };

    stop(){
        if(this.frames === 0){
            clearInterval(this.interval);
            this.isRunning = false;
                if(this.points <= 20){
                this.reset();
                }
        };
    }


    updateObstacles(){
        if(this.frames % 50 === 0){
            this.obstacles.push(
                new Component(30, 30, 'green', Math.floor(Math.random() * this.width) - 30, Math.floor(Math.random() * this.height) - 30, this.ctx)
                )
        }
        for(let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].y += 1
            this.obstacles[i].draw();
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
/*         if (catchBug()){
            points += 20;
            console.log('Catching bug');
        } */
    };

    updateGameArea = () => {
        this.frames--;
        game.stop();
        this.clear();
        this.updateObstacles();
        this.player.newPos();
        this.player.draw();
  /*       this.checkGameOver(); */
        this.timer();
        this.score();
    }

}