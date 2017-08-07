import React, { Component } from "react";

import Countdown from "../Countdown";

import "./styles.css";

class FrontPage extends Component {
    render() {
        return (
            <header className="FrontPage">
                <div className="wrapper">
                    <div className="names">
                        <h1 className="tk">Trond Kjetil</h1>
                        <h1 className="tl">Trine Lise</h1>
                    </div>

                    <h1 style={{ marginTop: "44px" }}>24 ∙ 02 ∙ 2018</h1>

                    <Countdown />
                </div>
            </header>
        )
    }
}

export default FrontPage;
