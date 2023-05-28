
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, incByAmount, increment } from './slice';



function App() {
  const data = useSelector((state) => state.counterrrr)
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(increment())
  }
  const handleDec = () => {
    dispatch(decrement())
  }
  const handleIncByAmount = () => {
    dispatch(incByAmount(20))
  }
  return (
    <div className="App">

      <h1>hello world</h1>
      <h1>{data}</h1>

      <button onClick={handleInc}>increase</button>
      <button onClick={handleDec}>decrease</button>
      <button onClick={handleIncByAmount}> increaseByAmount</button>

    </div>
  );
}

export default App;
