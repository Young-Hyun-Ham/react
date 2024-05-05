// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class R019 extends Component {

    render() {
        let {b} = this.props;

        return (
            <div style={{'background': b ? 'blue' : 'black' }}>
                <div style={{padding: "0px"}}>{b.toString()}</div>
            </div>
        );
    }
}

R019.propTypes = {
    b: PropTypes.bool,
};

export default R019;