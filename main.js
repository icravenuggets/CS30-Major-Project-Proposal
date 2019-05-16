function draw() {
  // main draw loop consisting of functions that need to be called constantly
  pickingGameState();
}


function pickingGameState() {
  // determines what draw functions should be called based on what the game state is
  if (gameState === "mainMenu") {
    mainMenu();
  }
  else if (gameState === "game") {
    assignTiles();
    spellStuff();
    countingTime();
    showPlayer(playerOneX, playerOneY, playerTwoX, playerTwoY);
    healthStuff();
  }
  else if (gameState === "results") {
    results();
  }
}


function keyTyped() {
  // called if a key on the keyboard is pressed
  if (gameState === "mainMenu") {
    if (key === "1" || key === "2" || key === "3" || key === "4" || key === "5") {
      if (key === "1") {
        lines = levelOne;
      }
      else if (key === "2") {
        lines = levelTwo;
      }
      else if (key === "3") {
        lines = levelThree;
      }
      else if (key === "4") {
        lines = levelFour;
      }
      else if (key === "5") {
        lines = levelFive;
      }
      gameSetup();
      gameState = "game";
    }
  }
  else if (gameState === "game") {
    playerMovement();
    castingSpells();
  }
  else if (gameState === "results") {
    setup();
    gameSetup();
    windowResized();
  }
}



function mousePressed() {
  // If the mouse is pressed at any point
  // Nothing yet here
}



function windowResized() {
  // called if the user resizes the window
  if (windowHeight > windowWidth) {
    windowSize = windowWidth;
  }
  else {
    windowSize = windowHeight;
  }
  createCanvas(windowSize, windowSize);
  tileSize = windowSize / 20;
  objects();
}

function objects() {
  buttonObject = {
    mainMenuButton: new button(windowSize/2, windowSize/2, windowSize / 10, "red", "PLAY")
  };
  healthbarObject = {
    playerOneHealthbar: new healthbar(windowSize - playerOneMaxHealth * (windowSize / 120), 0, playerOneMaxHealth, playerOneRemainingHealth, 1),
    playerTwoHealthbar: new healthbar(0, windowSize - (windowSize / 40), playerTwoMaxHealth, playerTwoRemainingHealth, 2),
  };
}