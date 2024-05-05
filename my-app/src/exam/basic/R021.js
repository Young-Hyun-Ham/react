// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R021 extends Component {

    render() {
        let { str, num } = this.props;
        return (
            <div style={{padding: "0px"}}>
                {str} | {num}
            </div>
        );
    }
}

R021.propTypes = {
    //str: PropTypes.isRequired,
};

export default R021;