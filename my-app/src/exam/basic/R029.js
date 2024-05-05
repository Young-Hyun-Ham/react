// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shallowEqual } from 'shallow-equal';

class R029 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            str : "react",
            arrObj : ["react", {react: "200"}],
        }
    }

    btnClick = (nextProps, nextState) => {
        // npm install shallow-equal 설치
        return !shallowEqual(nextProps, nextState);
    }

    componentDidMount() {
        const obj = {react : "200"};
        const arr1 = ["리액트", obj];
        const arr2 = ["리액트", obj];
        const arr3 = ["리액트", {react: "200"}];
        const arr4 = ["리액트", {react: "200"}];

        console.log('arr1[0] === "리액트" equal : ' + (arr1[0] === "리액트"));
        console.log('arr1[0] === arr2[0] equal : ' + (arr1[0] === arr2[0]));
        console.log('arr1[1] === obj equal : ' + (arr1[1] === obj));
        console.log('arr1[1] === arr3[1] equal : ' + (arr1[1] === arr3[1]));
        console.log('arr3[1] === arr4[1] equal : ' + (arr3[1] === arr4[1]));
        console.log('arr1 === arr2 equal : ' + (arr1 === arr2));
        console.log('shallowEqual(arr1, arr2) : ' + shallowEqual(arr1, arr2));
        console.log('shallowEqual(arr2, arr3) : ' + shallowEqual(arr2, arr3));
    }

    render() {
        console.log("render() 실행");
        return (
            <div style={{padding: "0px"}}>

            </div>
        );
    }
}

R029.propTypes = {
    str: PropTypes.string,
    num: PropTypes.number,
};

export default R029;