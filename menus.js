function mainMenu() {
  // The main menu that shows up when you first start the page
  fill(0);
  textSize(width/7);
  text("Wizard Game", width/2, height/2);
  textSize(width/10);
  text("Press a number 1 to 5", width/2, height - height/3);
  buttonObject.mainMenuButton.display();
  console.log("tes")
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
  text("Press any button to continue", width/2, height/3);
}