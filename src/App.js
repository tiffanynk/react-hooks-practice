import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0
  };

  componentDidMount = () => {
    setInterval(() => this.incrementCount(), 1000)
  };

  decrementCount = () => {
    this.setState({count: this.state.count - 1})
  };

  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

export default App;
