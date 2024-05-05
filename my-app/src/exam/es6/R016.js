import React, { Component } from "react";
import _ from 'lodash';
import $ from 'jquery'; // npm install jquery

class R016 extends Component {
    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props) {
        super(props);
        // 태그에 어트리뷰트 값을 props parameter로 가져온다.
        console.log('constructor ====> ', props);
        this.state = {};
    }

    // render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행.
    componentDidMount() {
        console.log('componentDidMount ===============================');
    }

    input_alert = (e) => {
        var inputval = $('#inputId').val();
        alert(inputval);
    }

    render () {
        return (
            <>
                <h2>[THIS IS Jquery]</h2>
                <input id="inputId" name="inputName" />
                <button id="btnId" onClick={e => this.input_alert(e)}>Jquery Button</button>
            </>
        )
    }
}

export default R016;