import React, {Component} from "react";

export default class Button extends Component {

    state = {
        highlight: this.props.value
    };

    iden = "Identifier: " + 3;

    handleHighlight = identifier => {
        console.log(identifier);
        this.setState({highlight: this.state.highlight + 1});
    }


    render() {
        console.log('props', this.props);

        return (
            <React.Fragment>
                <div>
                    {/*{this.props.children}*/}
                    <h4>{this.props.id}</h4>
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