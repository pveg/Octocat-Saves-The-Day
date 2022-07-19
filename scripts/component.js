class Component {
    constructor(width, height, color, x, y, ctx){
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.speedX = 0;
        this.speedY = 0;
        

        const img = new Image();
        img.addEventListener('load', () => {});
        img.src = './docs/assets/images/octocat.gif'
        this.img = img;

        const img2 = new Image();
        img2.addEventListener('load', () => {});
        img2.src = './docs/assets/images/bug1.png'
        this.img2 = img2;
    };

    newPos(){
            this.x += this.speedX;
            this.y += this.speedY;

        if(this.x > canvas.width){
            this.x = 0;
        }
        if(this.y > canvas.height){
            this.y = 0;
        }
        if(this.x < 0){
            this.x = canvas.width; 
        }
        if(this.y < 0){
            this.y = canvas.height;
        }    
    }

    playerDraw(){
        this.ctx.drawImage(this.img, this.x, this.y, 80, 80);
    }

    enemieDraw(){
        this.ctx.drawImage(this.img2, this.x, this.y, 80, 80);
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.width;
    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.height;
    }

    crashWith(obstacles){
        return !(
            this.bottom() < obstacles.top() || 
            this.top() > obstacles.bottom() || 
            this.right() < obstacles.left() || 
            this.left() > obstacles.right()
            );
    }

}