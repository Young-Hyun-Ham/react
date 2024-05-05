// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R026 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            str : "react1",
            num : 400,
        }
    }
    stateChange = (flag) => {
        if (flag === "direct") {
            this.state.str = "react";
            console.log("state str값이 변경 되었나?", this.state.str);
            // 랜더링 하기 위해선 forceUpdate()를 해야 함. 
            // num값을 직접변경 한 후 forceUpdate를 하면 num 값도 랜더링 됨.
            this.forceUpdate();
        }
        if (flag === "set") {
            this.setState({str: "react"});
        }
    }
    stateNumChange = () => {
        this.state.num = 200;
        console.log("state num값이 변경 되었나?", this.state.num);
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.stateNumChange()}>state num 직접변경</button>
                <button onClick={(e) => this.stateChange("direct", e)}>state str 직접변경</button>
                <button onClick={(e) => this.stateChange("set", e)}>setState str 변경하기</button>
                <br/>
                [state 변경하기] str : {this.state.str} | 
                [state 변경하기] num : {this.state.num}
            </div>
        );
    }
}

R026.propTypes = {
    str: PropTypes.string,
    num: PropTypes.number,
};

export default R026;