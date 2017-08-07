import React, { Component } from "react";
import PropTypes from "prop-types";

function Page() {
    return (
        <article className="Page">
            { this.props.children }
        </article>
    )
}

Page.propTypes = {
    children: PropTypes.node,
}

export default Page;
