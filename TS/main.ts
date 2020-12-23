let game: Game;
window.addEventListener("load", (_: Event): void => {
  let canvas = document.getElementById('canvas') as HTMLCanvasElement;
  game = new Game(canvas);
  game.run();
});
