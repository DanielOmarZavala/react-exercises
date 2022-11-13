import React, {Component} from "react";

export default class Nav extends Component {

    state = {
        name: 'test'
    }

    render() {

        return (
            <React.Fragment>
                <div className={this.getGrid()}>
                    <div className={this.getBadgeClasses()}>
                        <h3>box 1</h3>
                    </div>
                    <div className={this.getBadgeClasses()}>
                        <h3>box 2</h3>
                    </div>
                    <div className={this.getBadgeClasses()}>
                        <h3>box 3</h3>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        return "badge bg-primary m-2 col-3";
    }

    getGrid() {
        return "row justify-content-around align-items-center";
    }
}