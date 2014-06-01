window.addEventListener( 'load', initialize)

function initialize(){
  console.log("initialize printed this")
  game = new Game(10)
  game.bindEventListeners()
}

function Game(length){
  this.players = []
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
    document.addEventListener('keyup', this.getKeyCode);
    document.getElementById("player-number-form").addEventListener('submit', this.startGame);
    document.getElementById("keys").addEventListener('click', this.newPlayer);
  },

  getKeyCode: function(e){
    return e.keyCode
  },

  startGame: function(e) {
   e.preventDefault()
   var numberOfPlayers = document.getElementById("player-number").value
  },

  initPlayers: function(numberOfPlayers) {
    // for(var i=0; i<numberOfPlayers; i++){
    //   debugger
    //   this.players.push()
    // }
  },
    newPlayer: function(){
      return new Player(event.target.innerHTML)
   }
}
