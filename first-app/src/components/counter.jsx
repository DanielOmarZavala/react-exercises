import React, {Component} from "react";

export default class Counter extends Component {

    state = {
        email: "email@gmail.com",
        count: 0,
        tags: ["tg1", "tg2", "tg3"]
    };

    style = {
        fontSize: 30,
        fontWeight: "bold",
        margin: 700
    };

    render() {
        return (
            <React.Fragment>
                <h1>React Practice</h1>

                <div>
                    <span style={this.style}>Testing Passed Styles</span>
                </div>

                <div>
                    Testing Dynamic Classes:
                    <span className={this.getBadgeClasses()}>{this.formatEmail()}</span>
                </div>

                <div>
                    {this.state.tags.length === 0 && "There are no tags!"}
                    {this.renderTags()}
                </div>

                {/*<ul>*/}
                {/*    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}*/}
                {/*</ul>*/}

                <div className="container">
                    <i>Login </i>
                    <input placeholder={'Enter Email Here'}/>
                </div>

                <h2 className="title">Settings</h2>

                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Current Email</span>
                            <input disabled type="text" placeholder="Dynamic user email"/>
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
                    </div>
                </form>
            </React.Fragment>
        );
    }

    formatEmail() {
        const {email} = this.state;
        return email === "email@gmail.com" ? <h3>{email}</h3> : email;
    }

    getBadgeClasses() {
        let classes = "badge m-2 rounded-pill bg-";
        classes += this.state.email === "email@gmail.com" ? "warning" : "secondary";
        return classes;
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>Please create some tags!</p>
        }

        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>

        )
    }
}

