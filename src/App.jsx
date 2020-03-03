// note; react components are .jsx instead of js, and capitalized first letter

// Some notes:
// Component in react is independent and reusable part of the ui
// jsx looks like html but is actually javascript

import React from "react";
import { Component } from "react";
import "./App.css";
import Clock from "./Clock.jsx";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 24, 2020",
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

        <Clock deadline={this.state.deadline} />

        <Form className="formWidth">
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            // onChange={event => console.log("event", event.target.value)}
            onChange={event =>
              this.setState({ newDeadline: event.target.value })
            }
          />

          <Button onClick={() => this.changeDeadline()}>submit</Button>
        </Form>
      </div>
    );
  }
}
// notes: you need an anonymous function for changeDeadline on buttonclick. Having a function without a handler creates loops in your app, resulting in crashes. Instead we use an anyonymous function to call the function just once.

export default App;
