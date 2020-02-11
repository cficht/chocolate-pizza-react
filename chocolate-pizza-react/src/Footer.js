import React, { Component } from "react";

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div id="hr-logo">
                    <span className="breakline"></span>
                    <span><img src={this.props.smalllogo} alt=""/></span>
                    <span className="breakline"></span>
                </div>
                <div id="copyright">
                    <p>Delicous &copy; . 2013 All Rights Reserved.</p>
                    <p>Proudly published with Ghost.</p>
                </div>
            </footer>
        )
    }
}