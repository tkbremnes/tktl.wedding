import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import FrontPage from "../FrontPage";
import Nav from "../Nav";
import PageBryllupet from "../PageBryllupet";
import PageOvernatting from "../PageOvernatting";
import PagePersoner from "../PagePersoner";
import PageWishlist from "../PageWishlist";

import "./styles.css";

function NoMatch() {
    return <div>404</div>
}

function Main() {
    return (
        <Router>
            <div>
                <Nav />

                <Switch>
                    <Route exact path="/" component={FrontPage}/>
                    <Route exact path="/bryllupet" component={PageBryllupet}/>
                    <Route exact path="/overnatting" component={PageOvernatting}/>
                    <Route exact path="/nøkkelpersoner" component={PagePersoner}/>
                    <Route exact path="/ønskeliste" component={PageWishlist}/>

                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    )
}

export default Main;
