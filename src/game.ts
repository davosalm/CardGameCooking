import Phaser from 'phaser';
import { MainScene } from './scenes/MainScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: 'app',
  scene: [MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 200 },
    },
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

export default config;
