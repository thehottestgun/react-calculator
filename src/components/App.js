import logo from '../logo.svg';
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import './styles/App.css';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null
  }
  
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }
  render(){return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <div className='calculator'>
      <Display value={this.state.next || this.state.total || "0"} />
      <ButtonPanel/>
    </div>
    </>
  );
}
}

