import React, {Component} from "react";
import Button from "./button";

export default class Buttons extends Component {

    state = {
        buttons: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    render() {

        return (
            <div>
                {this.state.buttons.map(button => (
                    <Button key={button.id} value={button.id} id={button.id} />
                    {/*    <h4>Button #{button.id}</h4>*/}
                    {/*</Button>*/}
                ))}
            </div>
        );
    }
}