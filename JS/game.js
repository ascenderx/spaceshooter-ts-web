"use strict";
class Game {
    constructor(canvas) {
        this.keys = {};
        this.loop = new IntervalLoop(this.onTick.bind(this), Game.INTERVAL);
        this.canvas = canvas;
        let context = canvas.getContext('2d');
        if (context === null) {
            throw "Cannot create 2D rendering context";
        }
        else {
            this.context = context;
        }
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }
    run() {
        this.loop.resume();
    }
    onKeyDown(event) {
        let key = event.key;
        if (!(key in this.keys)) {
            this.keys[key] = true;
        }
    }
    onKeyUp(event) {
        let key = event.key;
        if (key in this.keys) {
            delete this.keys[key];
        }
    }
    debounceKey(key) {
        if (key in this.keys) {
            this.keys[key] = false;
        }
    }
    isKeyDown(key) {
        return this.keys[key];
    }
    onTick() {
        this.handleInput();
        this.updateObjects();
        this.handleCollisions();
        this.cleanUpZombies();
        this.drawAll();
        return true;
    }
    handleInput() {
    }
    updateObjects() {
    }
    handleCollisions() {
    }
    cleanUpZombies() {
    }
    drawAll() {
    }
}
Game.INTERVAL = 10;
