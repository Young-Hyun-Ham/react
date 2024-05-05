// Reactjs code snippets [ rccp ] 로 생성한 파일

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class R018 extends Component {
    render() {
        let {s,n,b,a,o,f} = this.props;
        return (
            <div style={{padding: "0px"}}>
                <p>StringProps : {s}</p>
                <p>NumberProps : {n}</p>
                <span>BooleanProps : {b.toString()}</span>
                <p>ArrayProps : {a}</p>
                <p>ObjectProps : {JSON.stringify(o)}</p>
                <p>FunctionProps : {f('type func')}</p>
            </div>
        );
    }
}

R018.propTypes = {
    s: PropTypes.string,
    n: PropTypes.number,
    b: PropTypes.bool,
    a: PropTypes.array,
    o: PropTypes.object,
    f: PropTypes.func,
};

export default R018;