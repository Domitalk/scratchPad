class SceneMain extends Phaser.Scene {
    constructor() {
        // initial load immediately when game fires 
        super('SceneMain');
    }
    preload() {
    	// load img or sounds 
        // the first arg is key, it'll be how we refer to this img from now 
        // this.load.image("face", "images/face.png");

        this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    create() {
        // define objs
        // this.face = this.add.image(100, 200, "key");    
        // we can change the properties of this.face by calling functions on that this.face image class ie: this.face.displayHeight = 50

        // put character on the screen 
        this.char = this.add.sprite(game.config.width/2, game.config.height/2, "boy")

        // a shortcut for defining each frame, we can just use this.anims.generateFrameNumbers("boy");

        var frameNames= this.anims.generateFrameNumbers('boy');

        // define animation parameters 
        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 8,
            repeat: -1
        });

        // apply animation to the character 
        this.char.play('walk'); 

        //another method to move char with this.tweens 
        // the tweens is target end point with a bunch of paramters to determine behavior on the way there 
        this.tweens.add({ 
            targets: this.char, 
            duration: 5000, 
            x: game.config.width, 
            y: 0
        })
    }
    update() {
        // constantly running loop 

        // update loop to move char 
        // this.char.x += 2; 
        // if (this.char.x > game.config.width) {
        //     this.char.x = 0; 
        // };
    
    }
    customFunctions() {
        // helper functions can be defined like this 
    }
}