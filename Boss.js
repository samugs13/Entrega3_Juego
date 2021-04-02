class Boss extends Opponent{

    constructor() {
        super(game);
        this.height = BOSS_HEIGHT * game.width / 100,
        this.width = BOSS_WIDTH * game.width / 100,
        this.speed = BOSS_SPEED,
        this.myImageSrc = BOSS_PICTURE,
        this.myImageDeadSrc = BOSS_PICTURE_DEAD;
        this.image.src=this.myImageSrc
    }
















}