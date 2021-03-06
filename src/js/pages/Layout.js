import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
    navigate() { // gives a back button to the previous state
        this.props.history.pushState(null, "/");
    }
    navigateRefresh() { // removes the back button on state change
        this.props.history.replaceState(null, "/");
    }

    render() {
        // History is always available in the props
        const { history } = this.props;
        console.log(history.isActive("about"));
        return (
            <div>
                <h1>Stuff with Stuff</h1>
                {this.props.children}
                <Link to="services" activeClassName="test">Services Us</Link>
                <Link to="about"><button class="btn btn-success">About Us</button></Link>
                <button class="btn btn-primary" onClick={this.navigate.bind(this)}>Home</button>
            </div>
        );
    }
}
