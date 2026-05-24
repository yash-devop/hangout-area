import { placeTile } from "../utils/placeTile";

type FurnitureType = {
  scene: Phaser.Scene;

  moveTileX: number;
  moveTileY: number;

  offsetX: number;
  offsetY: number;
};
export function placeTV({
  scene,
  moveTileX,
  moveTileY,
  offsetX,
  offsetY,
}: FurnitureType) {
  // left TV cut
  placeTile({
    scene,

    frame: 140,

    moveTileX,
    moveTileY,

    offsetX,
    offsetY,
  });

  // right TV cut
  placeTile({
    scene,

    frame: 141,

    moveTileX: moveTileX + 1,
    moveTileY,

    offsetX,
    offsetY,
  });
}
