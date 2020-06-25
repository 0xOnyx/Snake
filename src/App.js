import React from 'react';
import './App.css';

import snake from "snake"

function App() {
  let refs =  React.createRef()

  function game(){
    let canvas = refs.current
    canavas.getContext("2d")
    new snake(canvas)
  }

  return (
    <div>
      <canvas width={100} height={100} ref={refs}></canvas>
    </div>
  );
}

export default App;
