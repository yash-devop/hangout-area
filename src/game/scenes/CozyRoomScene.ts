import Phaser from "phaser";
import { placeTV } from "../game-objects/furniture";
import {
  FRAME_HEIGHT,
  FRAME_WIDTH,
  MAP_HEIGHT,
  MAP_WIDTH,
  TILE_SIZE,
} from "../utils/constants";

export class CozyRoomScene extends Phaser.Scene {
  constructor() {
    super("cozyroom");
  }

  preload() {
    this.load.spritesheet("tiles", "/src/assets/tileset.png", {
      frameWidth: FRAME_WIDTH,
      frameHeight: FRAME_HEIGHT,
    });
  }

  create() {
    const roomWidth = MAP_WIDTH * TILE_SIZE;
    const roomHeight = MAP_HEIGHT * TILE_SIZE;

    const offsetX = (this.scale.width - roomWidth) / 2;

    const offsetY = (this.scale.height - roomHeight) / 2;

    console.log("CORDS", {
      MAP_WIDTH,
      MAP_HEIGHT,
      roomWidth,
      titleSIze: TILE_SIZE,
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
            offsetX + col * TILE_SIZE,
            offsetY + row * TILE_SIZE,
            "tiles",
            0,
          )
          .setOrigin(0);
      }
    }

    // this.add.sprite(300, 180, "tiles", 140).setOrigin(0);
    // this.add.sprite(330, 180, "tiles", 141).setOrigin(0);
    placeTV({
      scene: this,
      offsetX,
      offsetY,
      moveTileX: 0,
      moveTileY: 0,
    });
    placeTV({
      scene: this,
      offsetX,
      offsetY,
      moveTileX: 10,
      moveTileY: 8,
    });
  }

  // create() {
  //   const TILE_SIZE = 32;
  //   const SCALE = 2;

  //   for (let i = 0; i < 300; i++) {
  //     const x = (i % 10) * TILE_SIZE * SCALE;
  //     const y = Math.floor(i / 10) * TILE_SIZE * SCALE;

  //     this.add.sprite(x, y, "tiles", i).setOrigin(0).setScale(SCALE);

  //     this.add.text(x, y, `${i}`, {
  //       fontSize: "12px",
  //       color: "#ffffff",
  //     });
  //   }
  // }

  update() {}
}
