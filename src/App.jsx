// note; react components are .jsx instead of js, and capitalized first letter

// Some notes:
// Component in react is independent and reusable part of the ui
// jsx looks like html but is actually javascript

import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to December 25, 2017</div>

        <div>
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 Hours</div>
          <div className="Clock-minutes">15 Minutes</div>
          <div className="Clock-seconds">20 Seconds</div>
        </div>

        <div>
          <input placeholder="new date" />
          <button>submit</button>
        </div>
      </div>
    );
  }
}

export default App;
