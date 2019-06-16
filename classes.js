// I kept the spells as separate classes even though they are very similar because I plan
// to take these much further than they currently are at in terms of behavioural differences


class FireSpell {
  // FireSpell beats grass but disappears if it collides with a water spell
  constructor(startingX, startingY, speed, direction, owner) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
    this.owner = owner;
  }

  implant() {
    // ensures that the spell's x and y coordinates on the grid are displayed by the spell type
    if (this.exists) {
      field[this.x][this.y] = "f";
    }
  }

  move() {
    // moves the spell every interval of time
    if (this.exists) {
      if (millis() - this.counter >= this.speed && this.exists) {
        if (this.direction === "up") {
          field[this.x][this.y] = ".";
          if (field[this.x][this.y - 1] != "#") {
            this.y -= 1;
          }
          else {
            this.exists = false;
          }
        }
        else if (this.direction === "down") {
          field[this.x][this.y] = ".";
          if (field[this.x][this.y + 1] != "#") {
            this.y += 1;
          }
          else {
            this.exists = false;
          }
        }
        else if (this.direction === "right") {
          field[this.x][this.y] = ".";
          if (field[this.x + 1][this.y] != "#") {
            this.x += 1;
          }
          else {
            this.exists = false;
          }
        }
        else if (this.direction === "left") {
          field[this.x][this.y] = ".";
          if (field[this.x - 1][this.y] != "#") {
            this.x -= 1;
          }
          else {
            this.exists = false;
          }
        }
        this.counter = millis();
      }
    }
  }

  checkForCollision() {
    // checks for collision with players or other spells
    if (this.exists) {
      if (this.owner === "p") {
        if (this.x === playerTwoX && this.y === playerTwoY) {
          playerTwoRemainingHealth -= 5;
          hitSound.setVolume(0.1);
          hitSound.play();
          this.exists = false;
        }
        else if (field[this.x][this.y] === "w") {
          this.exists = false;
          field[this.x][this.y] = "w";
        }
      }
      else if (this.owner === "o") {
        if (this.x === playerOneX && this.y === playerOneY) {
          playerOneRemainingHealth -= 5;
          hitSound.setVolume(0.1);
          hitSound.play();
          this.exists = false;
        }
        else if (field[this.x][this.y] === "w") {
          this.exists = false;
          field[this.x][this.y] = "w";
        }
      }
    }
  }
}



class WaterSpell {
  // beats fire but loses to grass
  constructor(startingX, startingY, speed, direction, owner) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
    this.owner = owner;
  }

  implant() {
    // ensures that the spell's x and y coordinates on the grid are displayed by the spell type
    if (this.exists) {
      field[this.x][this.y] = "w";
    }
  }

  move() {
    // moves the spell
    if (millis() - this.counter >= this.speed && this.exists) {
      if (this.direction === "up") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y - 1] != "#") {
          this.y -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "down") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y + 1] != "#") {
          this.y += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "right") {
        field[this.x][this.y] = ".";
        if (field[this.x + 1][this.y] != "#") {
          this.x += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "left") {
        field[this.x][this.y] = ".";
        if (field[this.x - 1][this.y] != "#") {
          this.x -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      this.counter = millis();
    }
  }

  checkForCollision() {
    // checks for player or spell collision
    if (this.exists) {
      if (this.owner === "p") {
        if (this.x === playerTwoX && this.y === playerTwoY) {
          playerTwoRemainingHealth -= 5;
          hitSound.setVolume(0.1);
          hitSound.play();
          this.exists = false;
        }
        else if (field[this.x][this.y] === "g") {
          this.exists = false;
          field[this.x][this.y] = "g";
        }
      }
      else if (this.owner === "o") {
        if (this.x === playerOneX && this.y === playerOneY) {
          playerOneRemainingHealth -= 5;
          hitSound.setVolume(0.1);
          hitSound.play();
          this.exists = false;
        }
        else if (field[this.x][this.y] === "g") {
          this.exists = false;
          field[this.x][this.y] = "g";
        }
      }
    }
  }
}



class GrassSpell {
  // beats water, loses to fire
  constructor(startingX, startingY, speed, direction, owner) {
    this.x = startingX;
    this.y = startingY;
    this.size = tileSize;
    this.speed = speed;
    this.direction = direction;
    this.counter = millis();
    this.exists = true;
    this.owner = owner;
  }

  implant() {
    // ensures that the spell's x and y coordinates on the grid are displayed by the spell type
    if (this.exists) {
      field[this.x][this.y] = "g";
    }
  }

  move() {
    // moves the spell
    if (millis() - this.counter >= this.speed && this.exists) {
      if (this.direction === "up") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y - 1] != "#") {
          this.y -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "down") {
        field[this.x][this.y] = ".";
        if (field[this.x][this.y + 1] != "#") {
          this.y += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "right") {
        field[this.x][this.y] = ".";
        if (field[this.x + 1][this.y] != "#") {
          this.x += 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      else if (this.direction === "left") {
        field[this.x][this.y] = ".";
        if (field[this.x - 1][this.y] != "#") {
          this.x -= 1;
        }
        else {
          this.exists = false;
          field[this.x][this.y] = ".";
        }
      }
      this.counter = millis();
    }
  }

  checkForCollision() {
    // checks for collision with players or other spells
    if (this.exists) {
      if (this.owner === "p") {
        if (this.x === playerTwoX && this.y === playerTwoY) {
          playerTwoRemainingHealth -= 5;
          hitSound.setVolume(0.1);
          hitSound.play();
          this.exists = false;
        }
        else if (field[this.x][this.y] === "f") {
          this.exists = false;
          field[this.x][this.y] = "f";
        }
      }
      else if (this.owner === "o") {
        if (this.x === playerOneX && this.y === playerOneY) {
          playerOneRemainingHealth -= 5;
          hitSound.setVolume(0.1);
          hitSound.play();
          this.exists = false;
        }
        else if (field[this.x][this.y] === "f") {
          this.exists = false;
          field[this.x][this.y] = "f";
        }
      }
    }
  }
}



class healthbar {
  // healthbar class for both players
  constructor(x, y, maxHealth, remainingHealth, owner) {
    this.maxHealth = maxHealth;
    this.remainingHealth = remainingHealth;
    this.x = x;
    this.y = y;
    this.owner = owner;
  }

  display(remainingHealth) {
    // displays the remaining health, with appropirate colour and text
    this.remainingHealth = remainingHealth;
    fill(255);
    rect(this.x, this.y, this.maxHealth * (windowSize / 120), windowSize / 40);
    fill(0, 255, 0);
    if (this.remainingHealth <= this.maxHealth / 5) {
      fill(255, 0, 0);
    }
    else if (this.remainingHealth <= this.maxHealth / 2) {
      fill(255, 255, 0);
    }
    rect(this.x, this.y, this.remainingHealth * (windowSize / 120), windowSize / 40);

    fill(0);
    textSize(windowSize / 40);
    textAlign(LEFT, TOP);
    if (this.owner === 1) {
      text("Player Two: " + this.remainingHealth, windowSize - playerOneMaxHealth * (windowSize / 120), 0);
    }
    else  if (this.owner === 2) {
      text("Player One: " + this.remainingHealth, 0, windowSize - (windowSize / 40));
    }
  }
}