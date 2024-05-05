import React, { Component } from "react";
import _ from 'lodash';

class R013 extends Component {
    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props) {
        super(props);
        // 태그에 어트리뷰트 값을 props parameter로 가져온다.
        console.log('constructor ====> ', props);
        this.state = {
            arrowFuc: 'React200',
            num: 3,
        };
        console.log('this.state ====> ', this.state);
        this.gVars = {
            arrowFuc: 'React200',
            num: 3,
        };
    }

    // render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행.
    componentDidMount() {
        console.log('==============================================================');
        
        fn_exam1(100);
        this.fn_exam2(100, 200);
        this.fn_exam3(300);

        function fn_exam1(num1) {
            //console.log('componentDidMount this.state ====> ', this.state);
        }        
    }

    fn_exam2 = ( num1, num2 ) => {
        let this_bind = this;
        console.log('variable num1, num2 ====> ', num1, num2);
        console.log('arrow function this.gVars ====> ', this.gVars);
        console.log('variable function this ====> ', this_bind);
        console.log('==============================================================');
    }

    fn_exam3(num3) {
        let this_bind = this;
        // 변수형 함수
        console.log('variable num3 ====> ', num3);
        console.log('variable function this.state ====> ', this.state.num);
        console.log('variable function this ====> ', this_bind.state.num);
        console.log('==============================================================');
    } 

    render () {
        return (
            <h2>[THIS IS ArrowFunction]</h2>
        )
    }
}

export default R013;