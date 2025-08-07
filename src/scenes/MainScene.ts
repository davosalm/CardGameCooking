import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  private helloText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.helloText = this.add.text(0, 0, 'Hello, Culinary Combat!', {
      font: '64px Arial',
      color: '#ffffff',
    });
    this.resize();
    this.scale.on('resize', this.resize, this);
  }

  private resize() {
    const { width, height } = this.scale;
    this.helloText.x = width / 2 - this.helloText.width / 2;
    this.helloText.y = height / 2 - this.helloText.height / 2;
  }
}
