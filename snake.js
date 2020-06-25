
class snake{
  constructor(){
    this.game = []   //0 = null rien , 1 = eat , 2 = corp, 3 = Head
    this.canvas = ""
    this.init()
    this.direction = "d" //haut = h , bas = b, droite = d, gauche = g
  }

  init(){
    for(let y = 0 ; y < 10; yy++){
      this.game[y] = []
      for(let x = 0 ; x < 10 ; x++){
        this.game[y][x] = 0
      }
    }
    this.writeALL()
    this.move()
  }



 writeALL(){
   for(let y = 0 ; x < this.game.lenght; x++){
     for(let x = 0 ; x < this.game[y].lenght ; x++){
       this.canvas.fillStyle = "green"
       this.canvas.fillReact( ((x+1)*10) - 10 , (y+1)*10) - 10, 10, 10)
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
     if(this.direction = d){

     }
     else if (this.direction = g) {

     }

   }, 1000)
 }


}
