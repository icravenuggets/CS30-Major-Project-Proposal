function mapSelect() {
  // The main menu that shows up when you first start the page
  background(255);
  fill(0);
  textSize(windowSize / 20);
  text("Press a number 1 to 5 to pick a map", windowSize / 2, windowSize / 3);
}
  

function mainMenu() {
  fill(0);
  textSize(windowSize/7);
  text("Wizard Game", windowSize / 2, windowSize / 4);
  textSize(windowSize/30);
  text("Press p in game to pause and read the instructions", windowSize / 2, windowSize - windowSize / 4);
  text("Press the ENTER key to continue", windowSize / 2, windowSize / 2);
}


function pauseMenu() {
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