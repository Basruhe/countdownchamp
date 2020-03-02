// note; react components are .jsx instead of js, and capitalized first letter

// Some notes:
// Component in react is independent and reusable part of the ui
// jsx looks like html but is actually javascript

import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 24, 2017",
      newDeadline: ""
    };
  }

  changeDeadline() {
    console.log("State looks like this:", this.state);
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>

        <div>
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 Hours</div>
          <div className="Clock-minutes">15 Minutes</div>
          <div className="Clock-seconds">20 Seconds</div>
        </div>

        <div>
          <input
            placeholder="new date"
            // onChange={event => console.log("event", event.target.value)}
            onChange={event =>
              this.setState({ newDeadline: event.target.value })
            }
          />

          <button onClick={() => this.changeDeadline()}>submit</button>
        </div>
      </div>
    );
  }
}
// notes: you need an anonymous function for changeDeadline on buttonclick. Having a function without a handler creates loops in your app, resulting in crashes. Instead we use an anyonymous function to call the function just once.

export default App;
