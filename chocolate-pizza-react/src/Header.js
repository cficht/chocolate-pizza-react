import React, { Component } from "react";

export default class Header extends Component {

    render() {
        return (
            <header>
                <div>
                    <div className="float-left">
                        <div>
                            <img src={this.props.logo} alt="" />
                        </div>
                        <div id="logo-text">
                            <h1>Delicious</h1>
                            <h3>The best food blog on the web</h3>
                        </div>
                    </div>
                    <div className="float-right">
                        <nav>
                            <img src={this.props.fb} alt="" />
                            <img src={this.props.twit} alt="" />
                            <img src={this.props.gp} alt="" />
                            <img src={this.props.insta} alt="" />
                            <img src={this.props.flic} alt="" />
                            <img src={this.props.pint} alt="" />
                            <img src={this.props.rss} id="rss" alt="" />
                            <img src={this.props.mail} alt="" />
                        </nav>
                    </div>
                    <div id="texture-box">
                    </div>
                </div>
            </header>
        )
    }
}