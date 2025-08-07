import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.add.text(400, 300, 'Hello, Culinary Combat!', {
      font: '64px Arial',
      color: '#ffffff',
    });
  }
}
