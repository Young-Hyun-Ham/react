// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R025 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            str : "react",
            num : 400,
        }
    }
    stateChange = (flag) => {
        if (flag == "direct") {
            this.state.str = "react";
            console.log("state값이 변경 되었나?", this.state.str);
        }
        if (flag == "set") {
            this.setState({str: "react"});
        }
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.stateChange("direct", e)}>state 직접변경</button>
                <button onClick={(e) => this.stateChange("set", e)}>setState 변경하기</button>
                <br/>
                [state 변경하기] str : {this.state.str}
            </div>
        );
    }
}

R025.propTypes = {
    str: PropTypes.string,
    num: PropTypes.number,
};

export default R025;