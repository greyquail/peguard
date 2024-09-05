import Phaser from 'phaser';

class Tower extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'tower');
        this.scene = scene;
        this.damage = 10;
        this.range = 100;
    }

    update(time, delta) {
        // Update tower logic here
    }
}

export default Tower;
