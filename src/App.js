import React, { useState } from 'react'
import './style.css'



import Contact from './Contact'
import About from './About'

// function App() {

//   const first = "Hello World";
//   const equation = 2 + 3

//   let text = 'adil'

//   const hi = React.createElement('h1', null, "It's Work")
  
//   return (
//     <div>
//       <h1 style={{color:'red'}}>Hello</h1>
//       <p >shafhdjsk</p>
//       <h1>{equation}</h1>
//       <h1>2 + 3 = {2+3}</h1>


//       <h1>Hello WOrld</h1>

//       {hi}
       


//     </div>  
//   )
// }





// function App() {
//   return (
//     <div>

//       <h1>FIrst Component : App</h1>

//       <About name='adil' lastName='Dev' work='developer' />
//       <Contact title='Hello' book='dev2'/>

//     </div>

//   )
// }



function App() {

  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count+1)
  }

  const sub = () => {
    if (count>0)
    return setCount(count-1)
  }
  return (

    <div>
    <input type='number' value={count} onChange={(event) => setCount(parseInt(event.target.value))} />

    <button onClick={add}>Add</button>
    <button onClick={sub}>Subtract</button>
    <h1>{count}</h1>
    </div>
  )
}



export default App;

