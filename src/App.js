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
    <div className="count-btn">
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
