import React from "react";
import ReactDOM from "react-dom";
import Segment from "./Segment";

const App = () => {
    return (
        <div>
            <Segment>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    Error: PDF not found.
                </div>
                <div className="ui primary button"> Go back </div>
            </Segment>
            <Segment>
                <h4 className="ui header"> Attention ! </h4>
                <p> Lorem Ipsum Dolor Ipset </p>
            </Segment>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);