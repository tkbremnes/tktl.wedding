import React from "react";
import PropTypes from "prop-types";

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
