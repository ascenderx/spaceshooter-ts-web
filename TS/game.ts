class Game {
  private static readonly INTERVAL = 10;
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  private readonly keys: { [key: string]: boolean } = {};
  private readonly loop = new IntervalLoop(this.onTick.bind(this), Game.INTERVAL);

  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    let context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (context === null) {
      throw "Cannot create 2D rendering context";
    } else {
      this.context = context;
    }

    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  public run(): void {
    this.loop.resume();
  }

  private onKeyDown(event: KeyboardEvent): void {
    let key: string = event.key;
    if (!(key in this.keys)) {
      this.keys[key] = true;
    }
  }

  private onKeyUp(event: KeyboardEvent): void {
    let key: string = event.key;
    if (key in this.keys) {
      delete this.keys[key];
    }
  }

  private debounceKey(key: string): void {
    if (key in this.keys) {
      this.keys[key] = false;
    }
  }

  private isKeyDown(key: string): boolean {
    return this.keys[key];
  }

  private onTick(): boolean {
    this.handleInput();
    this.updateObjects();
    this.handleCollisions();
    this.cleanUpZombies();
    this.drawAll();
    return true;
  }

  private handleInput(): void {

  }

  private updateObjects(): void {

  }

  private handleCollisions(): void {

  }

  private cleanUpZombies(): void {

  }

  private drawAll(): void {

  }
}
