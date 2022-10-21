import React, {Component} from "react";

export default class Nav extends Component {

    state = {
        name: 'test'
    }

    render() {

        return (
            <React.Fragment>
                <div className={this.getGrid()}>
                    <div className={this.getBadgeClasses()}>box 1</div>
                    <div className={this.getBadgeClasses()}>box 2</div>
                    <div className={this.getBadgeClasses()}>box 3</div>
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        return "bg bg-primary col-4";
    }

    getGrid() {
        return "row justify-content-around align-items-center";
    }
}