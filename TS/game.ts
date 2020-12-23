class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private keys: { [key: string]: boolean } = {};

  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    let context = canvas.getContext('2d');
    if (context === null) {
      throw "Cannot create 2D rendering context";
    } else {
      this.context = context;
    }

    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  public run(): void {
    
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

  private handleInput(): void {

  }

  private updateObjects(): void {

  }

  private cleanUpZombies(): void {

  }

  private drawAll(): void {

  }
}
