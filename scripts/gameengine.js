class Game {
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.obstacles = [];
        this.interval = null;
        this.frames = 1000;
        this.isRunning = false;
        this.points = 0;
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
        for(let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].x -= 1
            this.obstacles[i].draw();
        };

/*         this.frames++
        if(this.frames % 120 === 0){
            let x = this.width;

            let minHeight = 20;

            let maxHeight = 200;

            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

            let minGap = 50;
            let maxGap = 200;

            let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            this.obstacles.push(new Component(20, height, 'green', x, 0, this.ctx))

            this.obstacles.push(new Component(20, x -  height - gap, 'aquamarine', x, height + gap, this.ctx))

        } */
    }

  /*   checkGameOver = () =>{
        const crashed = this.obstacles.some((obstacles) => {
            return player.crashWith(obstacles);
        });

    if(crashed){
        this.stop()
    };
    }; */

    score(){
        let points = this.points;
        this.ctx.font = '24px SilkscreenNormal'
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score: ${points}`, 500, 50);

    }

    updateGameArea = () => {
        this.clear();
        this.player.newPos();
        this.player.draw();
  /*       this.checkGameOver(); */
        this.updateObstacles();
        this.score();
    }

};