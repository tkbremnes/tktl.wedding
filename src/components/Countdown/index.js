import React, { Component } from "react";
import countdown from "countdown";

import "./styles.css";

class Countdown extends Component {
    componentDidMount() {
        const date = new Date(2018, 1, 24, 16, 0);

        countdown(date, (c) => {
            document.querySelector("#days").innerText = c.days;
            document.querySelector("#hours").innerText = c.hours;
            document.querySelector("#minutes").innerText = c.minutes;
            document.querySelector("#seconds").innerText = c.seconds;
        }, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

        window.requestAnimationFrame(() => {
            document.querySelector('.Countdown').classList.add('visible');
        });

    }
    render() {
        return (
            <div className="Countdown">
                <h3>
                    <div className="countdown-digit">
                        <div className="number" id="days"></div>
                        <div className="type"> dager</div>
                    </div>
                    <div className="countdown-digit">
                        <div className="number" id="hours"></div>
                        <div className="type"> timer</div>
                    </div>
                    <div className="countdown-digit">
                        <div className="number" id="minutes"></div>
                        <div className="type"> minutter</div>
                    </div>
                    <div className="countdown-digit">
                        <div className="number" id="seconds"></div>
                        <div className="type"> sekunder</div>
                    </div>
                </h3>
            </div>

        )
    }
}

export default Countdown;
