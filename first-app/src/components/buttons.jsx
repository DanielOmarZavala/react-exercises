import React, {Component} from "react";

export default class Buttons extends Component {

    state = {
        highlight: 1
    };

    iden = "Identifier: " + 3;

    handleHighlight = identifier => {
        console.log(identifier);
        this.setState({highlight: this.state.highlight + 1});
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <span>{this.state.highlight}</span>
                    <button onClick={() => this.handleHighlight(this.iden)} className={this.getBadgeClasses()}>Highlight</button>
                </div>
            </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.highlight === 1 ? "warning" : "primary";
        return classes;
    }

}