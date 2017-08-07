import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import FrontPage from "../FrontPage";
import Nav from "../Nav";
import PageVielsen from "../PageVielsen";

import "./styles.css";


function Main() {
    return (
        <Router>
            <div>
                <Nav />

                <Route exact path="/" component={FrontPage}/>
                <Route exact path="/vielse" component={PageVielsen}/>
            </div>
        </Router>
    )
}

export default Main;
