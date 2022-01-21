// Monopoly Game Part 2
// Example of a VERY simple Monopoly game simulation

const squares = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
];

// ----------------------  Step 1  -----------------------
// Creation of the class
class Player {
  // The constructor is the method triggered with the `new` keyword
  constructor(name, color) {
    this.name = name || "anonymous"
    this.color = color || "transparent"
    this.cash = 1000
    this.position = 0
  }

  // Method move
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }

  // Method displayInfo
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// --- Initialization of players ---
var player1 = new Player("Fer", "orange");
var player2 = new Player("Stan", "black");
var player3 = new Player("Alejandro", "pink");

// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// ---------------------  Step 2  --------------------------

class Game {
  constructor() {
    // --- Initialization of players ---
    let player1 = new Player("Fer", "orange");
    let player2 = new Player("Stan", "black");
    let player3 = new Player("Alejandro", "pink");

    // ---- Init of game variables
    this.players = [ player1, player2, player3];
    this.turn = 1;
    
  }

  play() {

    while(this.players.length > 1) {

      this.players.forEach(
        (player)=>{
        player.move()
        player.displayInfo()
      });

      this.players = this.players.filter( (player)=>{return player.cash > 0} )

    }

    console.log(`Player ${this.players[0].name} has won!`);
  }
}

const game = new Game();
game.play();

/*
class Game {
  constructor() {
    // --- Initialization of players ---
    let player1 = new Player("Carol", "red");
    let player2 = new Player("Carlos", "blue");
    let player3 = new Player("Marco", "black");

    // ---- Init of game variables
    this.players = [player1, player2, player3];
    this.turn = 1;
  }

  play() {
    while (this.players.length > 1) {
      console.group();
      console.log(`Turn ${this.turn}`);
      this.players.forEach((player) => {
        player.move();
        player.displayInfo();
      });
      this.players = this.players.filter((player) => {
        player.cash > 0;
      });
      console.groupEnd();
    }
    console.log(`Player ${this.players[0].name} has won!`);
  }
}
*/