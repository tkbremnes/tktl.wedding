import React, { Component } from "react";
import countdown from "countdown";

import "./styles.css";

class Countdown extends Component {
    componentWillMount() {
        this._countdownEnd = new Date(2018, 1, 24, 16, 0);

        this.setState({});
    }

    componentDidMount() {
        this._countdown = countdown(this._countdownEnd, (c) => {
            this.setState({
                days: c.days,
                hours: c.hours,
                minutes: c.minutes,
                seconds: c.seconds,
            });
        }, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

        window.requestAnimationFrame(() => {
            this._countdownEl.classList.add('visible');
        });
    }

    componentWillUnmount() {
        global.clearInterval(this._countdown);
    }

    render() {
        return (
            <div className="Countdown" ref={(el) => {this._countdownEl = el}}>
                <h3>
                    <div className="countdown-digit">
                        <div className="number">{ this.state.days }</div>
                        <div className="type"> dager</div>
                    </div>
                    <div className="countdown-digit">
                        <div className="number">{ this.state.hours }</div>
                        <div className="type"> timer</div>
                    </div>
                    <div className="countdown-digit">
                        <div className="number">{ this.state.minutes }</div>
                        <div className="type"> minutter</div>
                    </div>
                    <div className="countdown-digit">
                        <div className="number">{ this.state.seconds }</div>
                        <div className="type"> sekunder</div>
                    </div>
                </h3>
            </div>

        )
    }
}

export default Countdown;
