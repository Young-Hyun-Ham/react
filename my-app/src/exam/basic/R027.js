// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R027 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            str : "react",
            arrObj : ['react', { react: "200"}],
        }
    }
    btnClick = (flag) => {
        if (flag === "str") {
            // this.setState({str: "react"});
            this.state.str = "리액트";
        } else if (flag === "arrObj") {
            this.setState({arrObj: ["react1", {react: "201"}]});
        }
    }

    render() {
        console.log("render() 실행");
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.btnClick("str")}>문자열 변경</button>
                <button onClick={(e) => this.btnClick("arrObj")}>객체 배열 변경</button>
                <br/>
                {this.state.str} | {JSON.stringify(this.state.arrObj)}
            </div>
        );
    }
}

R027.propTypes = {
    str: PropTypes.string,
    num: PropTypes.number,
};

export default R027;