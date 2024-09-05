import Phaser from 'phaser';

class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene, 0, 0, 'enemy');
        this.scene = scene;
        this.health = 100;
        this.speed = 50;
          update(time, delta) {
        // Update enemy logic here
        this.x += this.speed * delta;
        if (this.x > this.scene.sys.canvas.width) {
            this.destroy();
        }
    }
}

export default Enemy;
