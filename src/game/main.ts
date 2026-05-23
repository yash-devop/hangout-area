import Phaser from "phaser";
import { CozyRoomScene } from "./scenes/CozyRoomScene";
import { gameConfig } from "./config/config";

export const startGame = () => {
  return new Phaser.Game({
    ...gameConfig,
    scene: [CozyRoomScene],
  });
};
