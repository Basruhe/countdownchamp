import React from "react";
import { Component } from "react";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    console.log("Current deadline state, passed as props: ", this.props);
  }

  // If you were to set state in the getTimeUntil function, you'd get infinite loops. You need lifecycle hooks (or methods). You want to calculate before rendering to the screen.
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  // To keep the clock up to date, getTimeUntil needs to keep running (controlled, not infinite!) when the component already runs. You use setInterval for this, set at every 1000 ms (=1s).
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  // Function to add a 0 before single-digit minutes/hours/days/etc. Styling
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  // Calculate the clock time. First: current date is subtracted from the deadline. Then, this time (in milliseconds!) is converted into days, hours, etc
  // You use the modulo (%) so that you get the remainder. (example: you don't want to see millions of seconds, but only the leftover seconds that are not part of the minutes,hours,etc)
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log("The time:", time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    console.log(
      "seconds",
      seconds,
      "minutes",
      minutes,
      "hours",
      hours,
      "days",
      days
    );

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    // // moved to componentwillmount, so that it only updates once.
    // this.getTimeUntil(this.props.deadline);

    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
        <div className="Clock-hours">
          {this.leading0(this.state.hours)} Hours
        </div>
        <div className="Clock-minutes">
          {this.leading0(this.state.minutes)} Minutes
        </div>
        <div className="Clock-seconds">
          {this.leading0(this.state.seconds)} Seconds
        </div>
      </div>
    );
  }
}

export default Clock;
