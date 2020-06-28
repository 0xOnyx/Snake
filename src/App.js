import React from 'react';
import './App.css';

import Snake from "./snake"

function App() {
  let refs =  React.createRef()
  let game = 0

  function play(){
    if(game === 0){
      let canvas = refs.current
      let context = canvas.getContext("2d")
      game = new Snake(context)

    }
  }

  function keypress(e){
    let options = [
        "ArrowUp",
        "ArrowDown",
        "ArrowRight",
        "ArrowLeft"
    ]
    if(options.indexOf(e.key) + 1)
    game.direction = e.key
  }



  return (
    <div onKeyDown={keypress} tabIndex={0} onClick={play}>
      <button onClick={play}> OK</button>
      <canvas width={1000} height={1000} ref={refs}></canvas>
    </div>
  );
}

export default App;
