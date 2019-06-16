function draw() {
  // main draw loop consisting of functions that need to be called constantly
  pickingGameState();
}


function pickingGameState() {
  // determines what looping functions should be called based on what the game state is
  if (gameState === "mainMenu") {
    mainMenu();
  }
  else if (gameState === "optionsMenu") {
    optionsMenu();
  }
  else if (gameState === "pauseMenu") {
    pauseMenu();
  }
  else if (gameState === "mapSelect") {
    mapSelect();
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
  if (gameState === "mapSelect") {
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
      selectSound.setVolume(1);
      selectSound.play();
    }
  }
  else if (gameState === "game") {
    // if in game and key is pressed, checks for player movement, spell casting, or game pausing
    playerMovement();
    castingSpells();
    if (key === "p") {
      gameState = "pauseMenu";
      selectSound.setVolume(1);
      selectSound.play();
    }
  }
  else if (gameState === "results") {
    // checks if enter key is pressed, which continues
    if (keyCode === ENTER) {
      selectSound.setVolume(1);
      selectSound.play();
      setup();
    }
  }
  else if (gameState === "mainMenu") {
    // checks if enter key is pressed, which is the only way to continue from the main menu
    if (keyCode === ENTER) {
      gameState = "mapSelect";
      selectSound.setVolume(1);
      selectSound.play();
    }
  }
  else if (gameState === "pauseMenu") {
    // if game is paused, pressing p again unpauses
    if (key === "p") {
      gameState = "game";
      selectSound.setVolume(1);
      selectSound.play();
      cooldownTimerOne = millis();
      cooldownTimerTwo = millis();
    }
  }
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
  // continuously shows objects
  healthbarObject = {
    playerTwoHealthbar: new healthbar(windowSize - playerTwoMaxHealth * (windowSize / 120), 0, playerTwoMaxHealth, playerTwoRemainingHealth, 1),
    playerOneHealthbar: new healthbar(0, windowSize - (windowSize / 40), playerOneMaxHealth, playerOneRemainingHealth, 2),
  };
}