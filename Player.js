class Bird {
  constructor(startingX, startingY) {
    this.x = startingX;
    this.y = startingY;
    this.height = 50;
    this.width = 50;
    this.gravity = 0.1;
    this.velocity = 0;
    this.lift = -10;
  }

  jump() {
    this.y -= 10;
    this.velocity -= 10;
  }

  keyPressed() {
    this.jump();
  }

  draw() {
    this.velocity += GRAVITY;

    this.y += this.velocity;
    this.velocity *= 0.96;

    // if (frameCount % 5 === 0) {
    //   console.log(this.velocity);
    // }

    if (this.velocity >= 10) {
      this.velocity = 5;
    }

    if (this.y >= HEIGHT) {
      this.y = 10;
      this.velocity = 0;
    }

    if (this.y <= 0) {
      this.y = 0;
      this.velocity = 0;
    }
    image(backman, this.x, this.y, this.width, this.height);
  }
}
