function mapSelect() {
  // The main menu that shows up when you first start the page
  fill(0);
  textSize(width/10);
  text("Press a number 1 to 5", width/2, height / 3);
}
  

function mainMenu() {
  buttonObject.mainMenuButton.display();
  fill(0);
  textSize(width/7);
  text("Wizard Game", width/2, height/4);
}


function optionsMenu() {

}


function pauseMenu() {
  
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