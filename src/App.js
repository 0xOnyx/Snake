import React from 'react';
import './App.css';

import Snake from "./snake"

function App() {
  let refs =  React.createRef()

  let direction = "l"

  function game(){
    let canvas = refs.current
    canvas.getContext("2d")
    new Snake(canvas, direction)
  }

  function keypress(e){
    console.log(e.code)
  }



  return (
    <div>
      <button onClick={game}> OK</button>
      <canvas width={100} height={100} ref={refs} onkeydown={keypress}></canvas>
    </div>
  );
}

export default App;
