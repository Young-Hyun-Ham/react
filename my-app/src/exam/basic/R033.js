// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R033 extends Component {
    render() {
        const elementArray = [
            <li>react</li>
            ,<li>200</li>
            ,<li>array map</li>
        ];

        return (
            <ul>
                {elementArray.map(item => item)}
            </ul>
        );
    }
}

R033.propTypes = {

};

export default R033;
