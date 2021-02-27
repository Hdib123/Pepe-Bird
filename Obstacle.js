function Pipe() {
  this.spacing = 175;
  this.top = random(height / 6, (3 / 4) * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 40;
  this.speed = 2;
  this.hit = false;

  this.highlight = false;

  this.hits = function (bird) {
    if (this.hit) {
      return false;
    }
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        this.hit = true;

        return true;
      }
    }
    this.highlight = false;
    return false;
  };

  this.between = function (bird) {
    if (bird.x > this.x && !this.passed) {
      this.passed = true;
      return true;
    }
    return false;
  };

  this.show = function () {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    image(wall, this.x, 0, this.w, this.top);
    image(wall, this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = function () {
    this.x -= this.speed;
  };

  this.offscreen = function () {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}
