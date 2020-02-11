import React, { Component } from "react";

export default class Author extends Component {

    render() {
        return (
            <div id="author">
                <div id="texture-box">
                </div>
                <div className="float-left">
                    <img src={this.props.van} alt="" />
                    <div id="logo-text">
                        <h5>Vanessa Stevenson</h5>
                        <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                    </div>
                </div>
                <div className="float-right">
                    <button>Share Recipe</button>
                </div>
            </div>
        )
    }
}