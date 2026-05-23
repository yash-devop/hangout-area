import Phaser from "phaser";

export class CozyRoomScene extends Phaser.Scene {
  constructor() {
    super("cozyroom");
  }

  TILE_SIZE = 32;

  preload() {
    this.load.spritesheet("tiles", "/src/assets/tileset.png", {
      frameWidth: this.TILE_SIZE,
      frameHeight: this.TILE_SIZE,
    });
  }

  create() {
    const MAP_WIDTH = 32;
    const MAP_HEIGHT = 24;

    const roomWidth = MAP_WIDTH * this.TILE_SIZE;
    const roomHeight = MAP_HEIGHT * this.TILE_SIZE;

    const offsetX = (this.scale.width - roomWidth) / 2;

    const offsetY = (this.scale.height - roomHeight) / 2;

    console.log("CORDS", {
      MAP_WIDTH,
      MAP_HEIGHT,
      roomWidth,
      titleSIze: this.TILE_SIZE,
      scaleWid: this.scale.width,
      roomHeight,
      offsetX,
      offsetY,
    });

    // this.add.sprite(0, 32 * 2, "tiles").setOrigin(0);
    // this.add.sprite(0, 32 * 3, "tiles").setOrigin(0);
    for (let row = 0; row < MAP_HEIGHT; row++) {
      for (let col = 0; col < MAP_WIDTH; col++) {
        this.add
          .sprite(
            offsetX + col * this.TILE_SIZE,
            offsetY + row * this.TILE_SIZE,
            "tiles",
            0,
          )
          .setOrigin(0);
      }
    }
  }

  update() {}
}
