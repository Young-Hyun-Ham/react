// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R024 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            str : "react",
            num : 400,
        }
    }
    render() {
        return (
            <div style={{padding: "0px"}}>
                {this.state.str} | {this.state.num}
            </div>
        );
    }
}

R024.propTypes = {
    str: PropTypes.string,
    num: PropTypes.number,
};

export default R024;