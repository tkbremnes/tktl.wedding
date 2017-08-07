import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Nav() {
    return (
        <nav>
            <Link to="/bryllupet">Bryllupet</Link>
            <Link to="/overnatting">Overnatting</Link>
            <Link to="/nøkkelpersoner">Nøkkelpersoner</Link>
            <Link to="/ønskeliste">Ønskeliste</Link>
        </nav>
    )
}

export default Nav;
