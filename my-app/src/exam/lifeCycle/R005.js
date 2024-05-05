import React, { Component } from "react";

class R005 extends Component {
    
    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props, context) {
        super(props);
        this.status = {'status' : 'modify'};
        console.log('1. constructor call', props, this.status, context);
    }

    render() {
        console.log('3. render call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default R005;