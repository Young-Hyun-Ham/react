// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R020 extends Component {

    render() {
        let { Json } = this.props;
        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(Json)}
            </div>
        );
    }
}

R020.propTypes = {
    // 자료형 선언은 shape
    Json: PropTypes.shape({
        react: PropTypes.string,
        twohundred: PropTypes.number,
    }),
};

export default R020;