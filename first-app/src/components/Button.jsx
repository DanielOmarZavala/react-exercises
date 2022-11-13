import React, {Component} from "react";

export default class Button extends Component {

    state = {
        highlight: this.props.button.value
    };

    /* -- pass argument iden to handleHighlight on ln-27 -- */
    iden = "Identifier: " + 3;

    /* -- modify and update state: highlight + 1 -- */
    handleHighlight = identifier => {
        console.log(identifier);
        console.log('Props: ', this.props);

        this.setState({highlight: this.state.highlight + 1});
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    {/*{this.props.children}*/}
                    <h4>{this.props.button.id}</h4>
                    <span>{this.state.highlight}</span>
                    <button onClick={() => this.handleHighlight(this.iden)}
                            className={this.getBadgeClasses()}>Highlight
                    </button>
                    <button onClick={() => this.props.onDelete(this.props.button.id)}
                            className={this.getButtonClasses()}>Delete
                    </button>
                </div>
            </React.Fragment>
        );
    }

    //dynamic badge classes
    getBadgeClasses() {
        let badgeClasses = "badge m-2 bg-";
        badgeClasses += this.state.highlight === 1 ? "warning" : "primary";
        return badgeClasses;
    }

    //setup for dynamic button classes
    getButtonClasses() {
        let buttonClasses = "btn btn-danger btn-sm m-2";
        return buttonClasses;
    }

}