(function () {
  self.Board = funtion(width, height){
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game = game_over;
    this.bars = [];
    this.ball = null;
  }

  self.Board.prototype = {
    get element(){
      var elements = this.bars;
      elements.push(ball);
      return elements;
    }
  }
})();

(funtion (){
  self.BoardView = function(canvas, board){
    this.canvas =  canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.ctx = canvas.getContext("2d");
  }
})();

window.addEventListener("load", main);

function main(){
  var board = new Board(800,400);
  var canvas = document.querySelector('.canvas');
  var board_view = new BoardView(canvas, board);
}
