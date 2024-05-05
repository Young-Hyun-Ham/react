// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R022 extends Component {

    render() {
        let { str, num } = this.props;
        return (
            <div style={{padding: "0px"}}>
                {str} | {num}
            </div>
        );
    }
}

// props 값 초기화 - 값을 넘기지 않았을 때 기본값을 셋팅 한다.
R022.defaultProps = {
    str: "리액트",
    num: 400
};
R022.propTypes = {
    str: PropTypes.string,
    num: PropTypes.number,
};

export default R022;