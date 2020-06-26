import React from 'react';
import './App.css';

import Snake from "./snake"

function App() {
  let refs =  React.createRef()

  let direction = "l"

  function game(){
    let canvas = refs.current
    let context = canvas.getContext("2d")
    let game = new Snake(context, direction)
  }

  function keypress(e){
    console.log("e")
  }



  return (
    <div onKeyDown={kes$} tabIndex={0}>
      <button onClick={game}> OK</button>
      <canvas width={10000} height={10000} ref={refs}></canvas>
    </div>
  );
}

export default App;
