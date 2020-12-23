"use strict";
let game;
window.addEventListener("load", (_) => {
    let canvas = document.getElementById('canvas');
    game = new Game(canvas);
    game.run();
});
