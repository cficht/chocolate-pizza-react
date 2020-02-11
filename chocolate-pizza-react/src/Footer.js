import React, { Component } from "react";

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div id="hr-logo">
                    <span class="breakline"></span>
                    <span><img src={this.props.smalllogo} /></span>
                    <span class="breakline"></span>
                </div>
                <div id="copyright">
                    <p>Delicous &copy; 2013 <li id="footer-dot"></li> All Rights Reserved.</p>
                    <p>Proudly published with Ghost.</p>
                </div>
            </footer>
        )
    }
}