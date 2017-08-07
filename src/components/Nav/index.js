import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/vielsen">VIELSEN</Link>
        </nav>
    )
}

export default Nav;
