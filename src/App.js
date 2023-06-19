import React, { useState } from 'react';
import './styles.css';


const App = () => {
  const [input,setInput] = useState('');
 
  


  const changeHandler = (value) =>{
    setInput(input+value);
  }

  const calculate = () =>{
    let result = eval(input)
    setInput(result)
  }

  const clrHandler = () =>{
    setInput("");
  }
  return (
    <div className='container'>
      
      <h1>calculator app using react js</h1>
      <div className='calculator'>
        <input type='text' className='result' value={input} onChange={changeHandler} />
        <div className='keypad'>

        <div className='row'>
            <button className='digit' onClick={()=>changeHandler('7')}>7</button>
            <button className='digit' onClick={()=>changeHandler('8')}>8</button>
            <button className='digit' onClick={()=>changeHandler('9')}>9</button>
            <button className='operator' onClick={()=>changeHandler('/')}>/</button>

        </div>
        <div className='row'>
            <button className='digit' onClick={()=>changeHandler('4')}>4</button>
            <button className='digit' onClick={()=>changeHandler('5')}>5</button>
            <button className='digit' onClick={()=>changeHandler('6')}>6</button>
            <button className='operator' onClick={()=>changeHandler('*')}>*</button>

        </div>
        <div className='row'>
            <button className='digit' onClick={()=>changeHandler('1')}>1</button>
            <button className='digit' onClick={()=>changeHandler('2')}>2</button>
          <button className='digit' onClick={()=>changeHandler('3')}>3</button>
            <button className='operator' onClick={()=>changeHandler('-')}>-</button>

        </div>
        <div className='row'>
            <button className='digit' onClick={()=>changeHandler('0')}>0</button>
            <button className='fun-key' onClick={()=>{calculate()}}>=</button>
            <button className='fun-key' onClick={()=>{clrHandler()}}>CLR</button>
            <button className='operator' onClick={()=>changeHandler('+')}>+</button>
           
        </div>
    </div>
      </div>
    </div>
  )
}

export default App