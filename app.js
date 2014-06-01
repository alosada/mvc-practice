window.addEventListener( 'load', initialize)

function initialize(){
  console.log("initialize printed this")
  game = new Game(10)
  game.bindEventListeners()
}

function Game(length){
  this.players = []
  this.playerNumber = 0
  this.keys = []
  this.trackLength = length
  console.log("game printed this")
}

function Player(){
  console.log("player printed this")
  this.position =  0;
  this.key = 66;
}

Player.prototype = {
  updatePosition: function(){
    console.log("updated pos printed this.")
    this.position ++
  }
}

Game.prototype = {
  bindEventListeners: function(){
    var playerForm =  document.getElementById("player-number-form")
    var keys = document.getElementById("keys")

    document.addEventListener('keyup', this.getKeyCode.bind(this));
    playerForm.addEventListener('submit', this.startGame.bind(this));
    keys.addEventListener('click', this.newPlayer.bind(this));
  },

  getKeyCode: function(e){
    return e.keyCode
  },

  startGame: function(e) {
   e.preventDefault()
   this.playerNumber = document.getElementById("player-number").value
   document.getElementById("keys").style.display = "inline";
  },

  initPlayers: function(numberOfPlayers) {
    // for(var i=0; i<numberOfPlayers; i++){
    //   debugger
    //   this.players.push()
    // }
  },
    newPlayer: function(){
      this.keys.push(event.target.id)
      document.getElementById("choosing-player").innerHTML = 1+this.keys.length;
      //return new Player(event.target.innerHTML)
   }
}
