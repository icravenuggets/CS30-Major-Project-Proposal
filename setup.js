// defining variables
let lines, amountOfTiles,  tileSize, playerOneDirection, playerOneX, playerOneY, playerTwoDirection, playerTwoX, playerTwoY, startingX, startingY, gameState;
let counter, fireSpellSpeed, waterSpellSpeed, grassSpellSpeed, mapState, windowSize, health;
let cooldownTimerOne = 0;
let cooldownTimerTwo = 0;
let field, spells, buttons;
let buttonObject, healthbarObject, floorSize;
let playerOneMaxHealth, playerTwoMaxHealth, playerOneRemainingHealth, playerTwoRemainingHealth, gameWinner, tempTimerOne;
let backgroundSoundOn = false;



function preload() {
  // preloading levels, images, and eventually other things such as sound
  levelOne = loadStrings("assets/levels/levelOne.txt");
  levelTwo = loadStrings("assets/levels/levelTwo.txt");
  levelThree = loadStrings("assets/levels/levelThree.txt");
  levelFour = loadStrings("assets/levels/levelFour.txt");
  levelFive = loadStrings("assets/levels/levelFive.txt");
  playerOneUp = loadImage("assets/playerOneUp.png");
  playerOneDown = loadImage("assets/playerOneDown.png");
  playerOneRight = loadImage("assets/playerOneRight.png");
  playerOneLeft = loadImage("assets/playerOneLeft.png");
  playerTwoUp = loadImage("assets/playerTwoUp.png");
  playerTwoDown = loadImage("assets/playerTwoDown.png");
  playerTwoRight = loadImage("assets/playerTwoRight.png");
  playerTwoLeft = loadImage("assets/playerTwoLeft.png");
  wall = loadImage("assets/rock.png");
  floor = loadImage("assets/dirt.png");
  castSound = loadSound("assets/sounds/cast.wav");
  backgroundMusic = loadSound("assets/sounds/background.wav");
  winSound = loadSound("assets/sounds/coin.wav");
  selectSound = loadSound("assets/sounds/pop.wav");
  hitSound = loadSound("assets/sounds/hit.wav");
  walkSound = loadSound("assets/sounds/tap.wav");
  font = loadFont("assets/font.otf");
}

function setup() {
  // setup functions such as setting default variables and calling one-time functions
  gameState = "mainMenu";
  textAlign(CENTER, CENTER);
  windowResized();
  field = [];
  spells = [];
  buttons = [];
  noCursor();
  textFont(font);
  // Looping background music
  if (backgroundSoundOn === false) {
    backgroundSoundOn = true;
    backgroundMusic.setVolume(0.2);
    backgroundMusic.loop();
  }
}

function gameSetup() {
  // Another setup function but only called when the game actually starts
  playerOneDirection = "up";
  playerTwoDirection = "down";
  playerOneMaxHealth = 50;
  playerOneRemainingHealth = playerOneMaxHealth;
  playerTwoMaxHealth = 50;
  playerTwoRemainingHealth = playerTwoMaxHealth;
  fireSpellSpeed = 100;     //100
  waterSpellSpeed = 150;    //150
  grassSpellSpeed = 50;     //50
  amountOfTiles = lines.length;
  field = createEmpty2dArray();
  for (let y = 0; y < amountOfTiles; y++) {
    for (let x = 0; x < amountOfTiles; x++) {
      let tileType = lines[y][x];
      field[x][y] = tileType;
    }
  }
  findPlayer();
  counter = millis();
  objects();
  windowResized();
}

function createEmpty2dArray() {
  // creates a 2-dimensional array consisting of only empty spaces
  let someGrid = [];
  for (let i = 0; i < amountOfTiles; i++) {
    someGrid.push([]);
    for (let j = 0; j < amountOfTiles; j++) {
      someGrid[i].push(0);
    }
  }
  return someGrid;
}

function findPlayer() {
  // finds the player's original spot based on the loaded map to set the playerOneX and playerOneY variables
  for (let x = 0; x < amountOfTiles; x++) {
    for (let y = 0; y < amountOfTiles; y++) {
      if (field[x][y] === "p") {
        playerOneX = x;
        playerOneY = y;
      }
      if (field[x][y] === "o") {
        playerTwoX = x;
        playerTwoY = y;
      }
    }
  }
}