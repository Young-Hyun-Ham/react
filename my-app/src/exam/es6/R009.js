import React, { Component } from "react";


class R009 extends Component {
    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props) {
        super(props);
        this.status = {};
    }

    // render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행.
    componentDidMount() {
        var jsString1 = '자바스크립트';
        var jsString2 = '입니다.\n다음 줄입니다.';
        console.log(jsString1+' 문자열'+jsString2+'~');

        var Es6String1 = 'ES6';
        var Es6String2 = '입니다.';
        console.log(`${Es6String1} 문자열${Es6String2}!!!
        ____다음줄입니다.`);

        var longString = 'ES6에 추가된 String 함수들입니다.';
        console.log('startsWith : ' + longString.startsWith('ES6에 추가'));
        console.log('endsWith : ' + longString.endsWith('함수들입니다.'));
        console.log('includes : ' + longString.includes('추가된 String'));
    }

    render () {
        return (
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R009;