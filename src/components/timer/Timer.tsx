import React, { Component } from 'react';
import './style.css';

interface initialTypes {
  timer: number,
  timerId: any,
}

interface TimerPropsTypes {
  isDyrty: boolean,
  increment: number,
}

const initialStateTimer = {
  timer: 0,
  timerId: 0,
}

export class Timer extends Component<TimerPropsTypes, initialTypes> {
  constructor(props: TimerPropsTypes) {
    super(props);

    this.state = initialStateTimer;
  };

  componentDidMount() {
    this.setState({ timerId: setInterval(this.tick, 1000) });
  };

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  };

  tick = () => this.setState({
    timer: this.props.isDyrty ? this.state.timer < 1000 ? this.state.timer + this.props.increment : 999 : 0,
  });

  render() {
    return (
      <div className='timer'>{this.state.timer}</div>
    );
  };
};
