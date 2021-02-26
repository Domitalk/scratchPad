class SceneMain extends Phaser.Scene {
    constructor() {
        // initial load immediately when game fires 
        super('SceneMain');
    }
    preload() {
    	// load img or sounds 
        // the first arg is key, it'll be how we refer to this img from now 
        this.load.image("face", "images/face.png");
    }
    create() {
        // define objs
        this.face = this.add.image(100, 200, "key");    
        // we can change the properties of this.face by calling functions on that this.face image class ie: this.face.displayHeight = 50
    }
    update() {
        // constantly running loop 
    }
    customFunctions() {
        // helper functions can be defined like this 
    }
}