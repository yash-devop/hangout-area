import { useEffect } from "react";
import { startGame } from "../game/main";

export const GameCanvas = () => {
  useEffect(() => {
    const game = startGame();

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" className="fixed inset-0" />;
};
