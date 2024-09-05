import Phaser from 'phaser';
import GameScene from './js/gameScene.js';
import Tower from './js/tower.js';
import Enemy from './js/enemy.js';

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 800,
    height: 600,
    scene: [GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

const game = new Phaser.Game(config);

game.scene.start('GameScene');
