import Phaser from "phaser";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  width: window.innerWidth,
  height: window.innerHeight,

  parent: "game-container",

  backgroundColor: "#000",

  pixelArt: true,

  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};
