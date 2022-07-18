class Game {
    constructor(ctx, width, height, player, color){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.obstacles = [];
        this.interval = null;
        this.frames = 30 * 60;
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
        this.player.x=350;
        this.player.y=10;
        this.frames=0;
        this.obstacles = [];
        this.points = 0;
        this.start();
    };

    stop(){
        clearInterval(this.interval);
        this.isRunning = false;
    }


    updateObstacles(){
        if(this.frames % 100 === 0){
            this.obstacles.push(
                new Component(20, 20, 'green', Math.floor(Math.random() * this.width) - 20, Math.floor(Math.random() * this.height) - 20, this.ctx)
                )
        }
        for(let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].x -= 1
            this.obstacles[i].draw();
    };
    
    };

    score(){
        let points = this.points;
        let timer = Math.floor(this.frames / 60) 
        this.ctx.font = '24px SilkscreenNormal'
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Time: ${timer}`, 500, 50);
        if (catchBug()){
            points += 20;
        }
    };

    updateGameArea = () => {
        this.frames--
        this.clear();
        this.player.newPos();
        this.player.draw();
  /*       this.checkGameOver(); */
        this.updateObstacles();
        this.score();
    }

}