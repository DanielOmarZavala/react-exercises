import React, {Component} from "react";

export default class Test extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center align-items-center">
                    <div className="btn btn-secondary col-4 m-2">box 1</div>
                    <div className="btn btn-secondary col-4 m-2">box 2</div>
                    <div className="w-100"></div>
                    <div className="btn btn-secondary col-4 m-2">box 3</div>
                    <div className="btn btn-secondary col-4 m-2">box 4</div>
                </div>

                <div className="row justify-content-around align-items-center">
                    <div className="col-11 btn btn-secondary">
                        Nested Boxes
                        <div className="row justify-content-around">
                            <div className="col-4 btn btn-primary">
                                Nested Box 1
                            </div>
                            <div className="col-4 btn btn-primary">
                                Nested Box 2
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}