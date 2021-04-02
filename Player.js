/**
 * Personaje principal del juego. Hereda de la clase Character.
 * @extends Character
 */
class Player extends Character {
    /**
     * Inicializa un jugador
     * @param game {Game} La instancia del juego al que pertenece el jugador
     */
    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImageSrc = PLAYER_PICTURE,
            myImageDeadSrc = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImageSrc, myImageDeadSrc);

        this.lives = PLAYER_LIVES;
    }

    /**
     * Actualiza los atributos de posición del jugador y los disparos en función de las teclas pulsadas
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Mata al jugador
     */
    collide() {
        if (!this.dead) {
            this.lives--;
            
            if(this.lives!==0){
                setTimeout(() => {
                    this.image.src = this.myImageSrc;
                    this.dead=false;
                }, 2000);
                super.collide();
                
                
            } else {
                setTimeout(() => {
                    this.game.endGame();
                    }, 2000);
                super.collide();
            }
        }   
    }
}