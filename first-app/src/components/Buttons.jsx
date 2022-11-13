import React, {Component} from "react";
import Button from "./Button";

export default class Buttons extends Component {

    state = {
        buttons: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleDelete = (buttonId) => {
        console.log('Button ID #: ', buttonId)

        const buttons = this.state.buttons.filter(b => b.id !== buttonId)
        this.setState({buttons: buttons});
    }

    render() {

        return (
            <div>
                {this.state.buttons.map(button => (<Button key={button.id} onDelete={this.handleDelete} button={button} />))}
            </div>
        );

        /*<Button key={button.id} onDelete={this.handleDelete} button={button} value={button.id} id={button.id} />*/
    }
}