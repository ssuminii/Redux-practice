import './App.css';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector(state=>state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:'INCREMENT'});
  };

  const decrease = () => {
    dispatch({type:'DECREMENT'});
  }

  return (
    <div className='container'>
      <div className="count-btn">
        <button onClick={decrease}>-</button>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;
