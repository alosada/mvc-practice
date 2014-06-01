window.addEventListener( 'load', initialize)

function initialize(){
  game = new Game(10)
  game.bindEventListeners()
}

function Game(length){
  this.players = []
  this.playerNumber = 0
  this.keys = []
  this.trackLength = length
}

function Player(){
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
   document.getElementById("player-number-form").style.display = "none";
   document.getElementById("keys").style.display = "block";
  },

  initPlayers: function(numberOfPlayers) {

  },
    newPlayer: function(){
      var key = event.target.id
      this.keys.push(key)
      document.getElementById(key).style.visibility = "hidden";
      document.getElementById("choosing-player").innerHTML = 1+this.keys.length;
      if(this.keys.length == this.playerNumber){
        document.getElementById("keys").style.display = "none";
      }
   }
}
