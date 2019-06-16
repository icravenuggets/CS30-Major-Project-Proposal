function mapSelect() {
  // The map selection menu that allows you to pick a battlefield
  background(255);
  fill(0);
  textSize(windowSize / 20);
  text("Press a number 1 to 5 to pick a map", windowSize / 2, windowSize / 3);
}
  

function mainMenu() {
  // The main menu function that automatically opens when you start the page
  fill(0);
  textSize(windowSize/7);
  text("Wizard Game", windowSize / 2, windowSize / 4);
  textSize(windowSize/30);
  text("Press p in game to pause and read the instructions", windowSize / 2, windowSize - windowSize / 4);
  text("Press the ENTER key to continue", windowSize / 2, windowSize / 2);
}


function pauseMenu() {
  // Activated when you press the "p" key in game, it pauses the game and shows game instructions
  background(255);
  fill(0);
  textSize(windowSize/20);
  textAlign(CENTER, CENTER);
  text("The game is paused, press p to unpause", windowSize/2, windowSize/2);
  textSize(windowSize/30);
  text("Player 1 use WASD to move, use XCV keys to cast spells", windowSize / 2, windowSize / 6);
  text("Player 2 use IJKL to move, use ,./ keys to cast spells", windowSize / 2, windowSize / 4);
  text("Hit your opponent with spells for them to lose health", windowSize / 2, windowSize - windowSize / 4);
  text("Whoever loses all their health loses the game", windowSize / 2, windowSize - windowSize / 5);
}

function results() {
  // The gameState that shows the winner after the game ends
  background(255);
  textAlign(CENTER, CENTER);
  if (gameWinner === 1) {
    textSize(windowSize/30);
    text("Player 1 Wins!", width/2, height/2);
  }
  else if (gameWinner === 2) {
    textSize(windowSize/30);
    text("Player 2 Wins!", width/2, height/2);
  }
  text("Press the Enter key to continue", width/2, height/3);
}