import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);


  const decrementCount = () => setCount(count - 1);

  const incrementCount = () => setCount(count + 1);

  /*componentDidMount ex. takes in two arguments a function and 
  dependencies. if there's nothing in the dependency list [], that is the useEffect will run one time only */

  useEffect(() => {
    setInterval(incrementCount, 1000)
  }, [])

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;


  /*useState is a function that takes in your initial state and 
  returns an array back. these constants are destructured 
  values from the return of useState, an array holding:
  0 index is call count is the current state. 1 index is a 
  function whose sole purpose is to change current  state */

/* if you have a larger app and need to keep track of several 
pieces of state, you can use a hybrid method of:
const [state, setState] = setState({
  user: {},
  count: 0,
  characters: []
})

now you would have to change the state for each piece by:
const increment = () => setCount({...state, count: state.count + 1})

but you should keep each piece of state seperate so you know
what each constant is doing */

/* useEffect - can do the same things as these lifecycle methods:
component DidUpdate / DidUpdate / WillUnmount

*/