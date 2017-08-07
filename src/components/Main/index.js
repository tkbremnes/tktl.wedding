import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

import FrontPage from "../FrontPage";

import "./styles.css";

function PageVielsen() {
    return (
        <div>
            Fordi vi skal gifte oss borgerlig på tinghuset, så er det dessverre ikke plass til at alle vi ønsker kan være med på selve vielsen. Vielsen blir derfor en liten affære, med aller nærmeste familie.
        </div>
    )
}

function Main() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">HOME</Link>
                    <Link to="/vielsen">VIELSEN</Link>
                </nav>

                <Route exact path="/" component={FrontPage}/>
                <Route exact path="/vielse" component={PageVielsen}/>
            </div>
        </Router>
    )
}

export default Main;
