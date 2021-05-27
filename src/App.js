import './App.css';
import './App.scss';
import { useDispatch } from 'react-redux';

import ViewCounter from './components/ViewCounter';
import {increment, decrement} from './actions/counterActions';

function App(){
  	const dispatch = useDispatch();
    
    function handleClick1(){
      console.log('Increase by 1');
      dispatch(increment(1));
    }
    function handleClick2(){
      console.log('Decrease by 1');
      dispatch(decrement(1));
    }

    return(
      <div className="App">
        <ViewCounter />
        <button className="Button" onClick = {handleClick1}>Increase by 1.</button>
        <button className="Button"onClick = {handleClick2}>Decrease by 1.</button>
      </div>
    )
};

export default App;
