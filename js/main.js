// want to be able to get to game from anywhere
var game;
window.onload = function () {
    // this is from phasergames.com snippets 
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        // where to place the game in html code 
        parent: 'phaser-game',
        // always have to have scene
        scene: [SceneMain]
    };
    // makes new game init
    game = new Phaser.Game(config);
}