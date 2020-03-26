import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { status: {  } }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getStatus()
    
  }

  getStatus = () => {
    // Get the passwords and store them in state
    fetch('/api/status')
      .then(res => res.json())
      .then(status => this.setState({ status: status }));
  }


  render() {
    const { status } = this.state;
    console.log(status);

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {status ? (
        <div className="wrapper">
        <div className="one">
          <h1>Input</h1>
          <h2>LED colors</h2>
          <table>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
            </tr>
            <tr>
              <td>
                <button
                  className="more"
                  onClick={this.getStatus}>
                  Refresh
                </button>          
              </td>
            </tr>
          </table>
          <h2>Make a sound</h2>
          <h2>Red LED blink</h2>
        </div>
        <div className="two">
            <h1>Output</h1>
            <h2>Temperature readout</h2>
            <span>Temperature: {status.temperature}</span>
            <h2>Light reading</h2>
            <span>Light: {status.light}</span>
            <h2>Sound Reading</h2>
            <p><span>Decibles: {status.sound}</span></p>
            <button
              className="more"
              onClick={this.getStatus}>
              Refresh
            </button>          
          </div>
        </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getStatus}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
