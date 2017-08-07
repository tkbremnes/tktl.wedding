import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

function Page({children}) {
    return (
        <article className="Page">
            { children }
        </article>
    )
}

Page.propTypes = {
    children: PropTypes.node,
}

export default Page;
