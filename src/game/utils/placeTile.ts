import { TILE_SIZE } from "./constants";

type PlaceTileType = {
  scene: Phaser.Scene;

  frame: number;

  moveTileX: number;
  moveTileY: number;

  offsetX: number;
  offsetY: number;
};
export function placeTile({
  scene,
  frame,
  offsetX,
  offsetY,
  moveTileX,
  moveTileY,
}: PlaceTileType) {
  const sizeOfOneTile = TILE_SIZE;

  const x = offsetX + moveTileX * sizeOfOneTile; // simple math , agar ek tile 20size hai , to 5 kitne ? => 100.
  const y = offsetY + moveTileY * sizeOfOneTile;
  scene.add.sprite(x, y, "tiles", frame).setOrigin(0).setScale(1);
}
