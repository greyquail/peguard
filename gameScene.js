import Phaser from 'phaser';
import Tower from './tower.js';
import Enemy from './enemy.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('tower', 'assets/images/towers/tower.png');
        this.load.image('enemy', 'assets/images/enemies/enemy.png');
    }

    create() {
        this.towers = [];
        this.enemies = [];

        this.score = 0;
        this.scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: 24, fill: '#fff' });

        this.input.on('pointerdown', (pointer) => {
            this.createTower(pointer.x, pointer.y);
        });

        // Create an enemy every 2 seconds
        this.time.addEvent({
            delay: 2000,
            callback: this.createEnemy,
            callbackScope: this,
            loop: true
        });
    }

    update(time, delta) {
        this.enemies.forEach((enemy) => {
            enemy.update(time, delta);
        });

        this.towers.forEach((tower) => {
            tower.update(time, delta);
        });
    }

    createTower(x, y) {
        const tower = new Tower(this, x, y);
        this.towers.push(tower);
        this.add.existing(tower);
    }

    createEnemy() {
        const enemy = new Enemy(this);
        this.enemies.push(enemy);
        this.add.existing(enemy);
    }
}

export default GameScene;
