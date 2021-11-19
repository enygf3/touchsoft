import { useState } from "react";
import "./sass/style.css"

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }

  const reset = () => {
    setCount(0)
  }

  if(count % 2 == 0) {
    document.body.style.backgroundColor = "#fff"
  } else {
    document.body.style.backgroundColor = "grey"
  }

  return (
    <div className="app">

      <div className='num'>
        <h3> { count } </h3>
      </div>

      <div className='even-odd'>
        <h3> { count % 2 == 0 ? "Введено четное число" : "Введено нечетное число" } </h3>
      </div>

      <div className="controls">
        <button onClick = { increment }>+</button>
        <button onClick = { reset }>Reset</button>
        <button onClick = { decrement }>-</button>
      </div>

    </div>
  );
}

export default App;
