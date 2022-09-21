import React, {Component} from "react";

export default class Counter extends Component {

    state = {
        email: "test",
        tags: ["tg1", "tg2", "tg3"]
    };

    style = {
        fontSize: 80,
        fontWeight: "bold",
        margin: 300
    };

    //language=HTML
    render() {
        return (
            <React.Fragment>
                <h1>React Practice</h1>

                <div>
                    <span style={this.style}>Testing Passed Styles</span>
                </div>

                <button>Button</button>

                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>

                <div className="container">
                    <i>Login </i>
                    <input placeholder={'Enter Email Here'}/>
                </div>

                <h2 className="title">Settings</h2>

                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Current Email</span>
                            <input disabled type="text" placeholder="text"/>
                        </div>

                        <div className="input-box">
                            <span className="details">Updated Email</span>
                            <input type="text" id="new-email" placeholder="Enter updated email"/>
                        </div>

                        <div className="input-box">
                            <span className="details">New Password</span>
                            <input id="new-password" type="password" placeholder="Enter new password"/>
                        </div>

                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input id="confirm-password" type="password" placeholder="Confirm password"/>
                        </div>

                        {/*TODO: TESTING PASSWORD STRENGTH HTML*/}

                        <span id="StrengthDisp" className="badge displayBadge form-control">Weak</span>
                    </div>
                </form>


            </React.Fragment>
        );
    }

    formatEmail() {
        const {email} = this.state;
        return email === "test" ? <h1>TEST</h1> : email;
    }
}

