import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleButtonClick = (value) => {
    if (value === '←') {
      this.setState({ input: this.state.input.slice(0, -1) });
    } else if (value === '=') {
      try {
        const result = eval(this.state.input);
        this.setState({ input: result.toString() });
      } catch (error) {
        this.setState({ input: 'Error' });
      }
    } else {
      this.setState({ input: this.state.input + value });
    }
  };

  handleClear = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className="calculator">
        <input type="text" className="input" value={this.state.input} readOnly />

        <div className="row">
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('←')}>←</button>
        </div>

        <div className="row">
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
        </div>

        <div className="row">
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
        </div>

        <div className="row">
          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('.')}>.</button>
          <button onClick={() => this.handleButtonClick('=')}>=</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
