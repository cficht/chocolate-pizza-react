import React, { Component } from "react";

export default class Header extends Component {

    render() {
        return (
            <header>
                <div>
                    <div class="float-left">
                        <img src={this.props.logo} />
                        <h1>Delicious</h1>
                        <h3>The best food blog on the web</h3>
                    </div>
                    <nav class="float-right">
                        <img src={this.props.fb} />
                        <img src={this.props.twit} />
                        <img src={this.props.gp} />
                        <img src={this.props.insta} />
                        <img src={this.props.flic} />
                        <img src={this.props.pint} />
                        <img src={this.props.rss} id="rss" />
                        <img src={this.props.mail} />
                    </nav>
                    <div id="texture-box">
                    </div>
                </div>
            </header>
        )
    }
}