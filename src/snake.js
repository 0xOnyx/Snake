
class Snake{
  constructor(canvas, direction){
    this.game = []   //0 = null rien , 1 = eat , 2 = corp, 3 = Head
    this.canvas = canvas
    this.direction = "" //Up = ArrowUp , down = ArrowDown, right = ArrowRight, left = ArrowLeft

    this.snake = []

    this.max = 9
    this.init()
  }

  init(){
    for(let y = 0 ; y < 10; y++){
      this.game[y] = []
      for(let x = 0 ; x < 10 ; x++){
        this.game[y][x] = 0
      }
    }

    ////////SPAWN
    let x = Math.floor( (Math.random() * 10 ) )
    let y = Math.floor( (Math.random() * 10 ) )
    this.game[y][x] = 3
    this.snake.push({x: x, y: y})


    //INIT GAME
    this.eatSpawn()
    this.writeALL()
    this.move()
  }



 writeALL(){
   for(let y = 0 ; y < this.game.length; y++){
     for(let x = 0 ; x < this.game[y].length ; x++){

       if(this.game[y][x] === 0 || this.game[y][x] === 2){
         this.canvas.fillStyle = "#2c3e50"
         this.canvas.fillRect( ((x+1)*100) - 100 , ((y+1)*100) - 100, 100, 100)
       }
       if(this.game[y][x] === 1){ //Eat
         this.canvas.fillStyle = "#e74c3c"
         this.canvas.fillRect( ((x+1)*100) - 100 , ((y+1)*100) - 100, 100, 100)
         //this.canvas.fillArc( ((x+1)*100) - 100, ((y+1)*100) - 100 , 50, 0 , 2*Math.PI, false )
         //this.canvas.fill()
        }
       if(this.game[y][x] === 2){   //Corps
         this.canvas.fillStyle = "#2980b9"
         this.canvas.fillRect( ((x+1)*100) - 90 , ((y+1)*100) - 90, 80, 80)
       }
       if(this.game[y][x] === 3){

         this.canvas.fillStyle = "#16a085"
         this.canvas.fillRect( ((x+1)*100) - 100 , ((y+1)*100) - 100, 100, 100)
       }

     }
   }
 }


 eatSpawn(){
   let possibilite = []

   for(let y = 0 ; y < this.game.length; y++){
     for(let x = 0 ; x < this.game[y].length ; x++){
       if(this.game[y][x] === 0){
         possibilite.push({x: x , y: y})
       }
     }
   }

   let x = Math.floor( Math.random() * possibilite.length )
   this.game[(possibilite[x].y)][(possibilite[x].x)] = 1
 }

  lose(headX, headY){
    for(let i = 1 ; i < this.snake.length ; i++){
      let x = this.snake[i].x
      let y = this.snake[i].y
      if(x === headX && y === headY){
        this.gameover()

      }
    }
  }

  gameover(){
    this.direction = ""
    this.canvas.fillStyle = "#e67e22"
    this.canvas.font = "100px serif"
    this.canvas.fillText("Game Over", 250, 500)
  }



 checkwin(){
   let x = this.snake[0].x
   let y = this.snake[0].y
   let length = this.snake.length - 1


   if(this.game[y][x] === 1){
     //Ajoute la derniére position du Snake si WIN
     this.snake.push({x: this.snake[length].x ,y: this.snake[length].y})
     this.eatSpawn()
   }
   else {
     this.moveSnakeArray()
   }
   this.printSnake()

   this.lose(x, y)
 }

 moveSnakeArray(){
   let length = this.snake.length - 1
   let x = this.snake[length].x
   let y = this.snake[length].y
   this.game[y][x] = 0
   this.snake.pop()
 }

 printSnake(){
  for(let i = 0 ; i < this.snake.length ; i++){
    let x = this.snake[i].x
    let y = this.snake[i].y

      if(i === 0){//HEAD TEST
        this.game[y][x] = 3
      }
      else{//CORPS
        this.game[y][x] = 2
      }
  }
  this.writeALL()
 }

 move(){
   setInterval(()=>{
    let x = this.snake[0].x
    let y = this.snake[0].y


    if(this.snake[0].y === -1 || this.snake[0].y === 10 || this.snake[0].x === 10 || this.snake[0].x === -1){
      this.gameover()
    }

     if(this.direction === "ArrowUp"){
       y = this.snake[0].y - 1
       this.snake.unshift({x: x, y: y})
       this.checkwin()
     }
     else if (this.direction === "ArrowDown") {
       y = this.snake[0].y + 1
       this.snake.unshift({x: x, y: y})
       this.checkwin()
     }
     else if(this.direction === "ArrowRight"){
       x = this.snake[0].x + 1
       this.snake.unshift({x: x, y: y})
       this.checkwin()
     }
     else if(this.direction === "ArrowLeft"){
       x = this.snake[0].x - 1
       this.snake.unshift({x: x, y: y})
       this.checkwin()
     }






   }, 300)
 }
}



export default Snake;
