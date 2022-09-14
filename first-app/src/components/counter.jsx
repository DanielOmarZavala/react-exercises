import React, {Component} from "react";

export default class Counter extends Component {

    user = {
        email: "test"
    }

    //language=HTML
    render() {
        return (
            <React.Fragment>
                <h1>tester</h1>
                <button>Increase</button>

                <div className="container">
                    <i>Login </i>
                    <input placeholder={'Enter Email Here'}/>
                </div>

                <h2 className="title">Settings</h2>

                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Current Email</span>
                            <input disabled type="text" placeholder={this.user.email}/>
                        </div>
                        <div className="input-box">
                            <span className="details">Updated Email</span>
                            <input type="text" id="new-email" placeholder="Enter updated email"/>
                        </div>
                    </div>
                </form>

            </React.Fragment>
        );
    }
}

