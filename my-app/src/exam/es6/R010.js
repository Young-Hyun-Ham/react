import React, { Component } from "react";

class R010 extends Component {
    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props) {
        super(props);
        this.status = {};
    }

    // render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행.
    componentDidMount() {
        // var는 전역으로 설정 되고 변수 재선언, 재할당을 허용
        var varName = 'react';
        var varName = '200';

        // let은 지역변수 설정 되고, 변수 재할당 허용
        let letName = 'react';
        //let letName = '200'; // 오류
        letName = '200'; // 사용가능

        // const는 지역변수 설정 되고, 변수 재선언, 재할당 안됨.
        const constName = 'react';
        // const constName = '200'; // 오류
        //constName = '200'; // 오류

        console.log(`${varName} :::: ${letName} :::: ${constName}`);
    }

    render () {
        return (
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R010;