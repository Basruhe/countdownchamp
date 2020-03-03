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

  // Calculate the clock time. First: current date is subtracted from the deadline. Then, this time (in milliseconds!) is converted into days, hours, etc
  // You use the modulo (%) so that you get the remainder. (example: you don't want to see millions of seconds, but only the leftover seconds that are not part of the minutes,hours,etc)
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log("The time:", time);
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    console.log("seconds", seconds);
    console.log("minutes", minutes);
    console.log("hours", hours);
    console.log("days", days);
  }

  render() {
    this.getTimeUntil(this.props.deadline);

    return (
      <div>
        <div className="Clock-days">{this.state.days} Days</div>
        <div className="Clock-hours">{this.state.hours} Hours</div>
        <div className="Clock-minutes">{this.state.minutes} Minutes</div>
        <div className="Clock-seconds">{this.state.seconds} Seconds</div>
      </div>
    );
  }
}

export default Clock;
