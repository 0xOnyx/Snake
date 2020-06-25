
class Snake{
  constructor(canvas, direction){
    this.game = []   //0 = null rien , 1 = eat , 2 = corp, 3 = Head
    this.canvas = canvas
    this.direction = direction //Up = u , down = d, right = r, left = l
    this.snake = [{x: 1, y: 2},{}]


    this.init()
  }

  init(){
    for(let y = 0 ; y < 10; y++){
      this.game[y] = []
      for(let x = 0 ; x < 10 ; x++){
        this.game[y][x] = 0
      }
    }
    this.writeALL()
    this.move()
  }



 writeALL(){
   for(let y = 0 ; y < this.game.lenght; y++){
     for(let x = 0 ; x < this.game[y].lenght ; x++){
       if(this.game[y][x] === 0){
         this.canvas.fillStyle = "#2c3e50"
       }
       if(this.game[y][x] === 1){
         this.canvas.fillStyle = "#e74c3c"
       }
       if(this.game[y][x] === 2){
         this.canvas.fillStyle = "#2980b9"
       }
       if(this.game[y][x] === 3){
         this.canvas.fillStyle = "#16a085"
       }

       this.canvas.fillReact( ((x+1)*10) - 10 , ((y+1)*10) - 10, 10, 10)
     }
   }
 }


 eatSpawn(){
   let x = Math.floor( (Math.random() * 10 ) )
   let y = Math.floor( (Math.random() * 10 ) )
   this.game[y][x] = 1
   this.writeALL()
 }


 move(){
   setInterval(()=>{
     if(this.direction = "r"){

     }
     else if (this.direction = "l") {

     }
     else if(this.direction = "u"){

     }
     else if(this.direction = "d"){

     }
   }, 1000)
 }
}



export default Snake;
