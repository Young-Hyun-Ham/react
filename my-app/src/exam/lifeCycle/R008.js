import React, { Component } from "react";

class R008 extends Component {
    
    // constructor() 함수 다음으로 실행된다.
    // 컴포넌트가 새로운 props를 받게 됐을 때 state를 변경해준다.
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps call:', props.prop_value);
        return { tmp_state:props.prop_value };
    }

    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props) {
        super(props);
        this.status = props;
        console.log('1. constructor call');
    }

    // render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행.
    componentDidMount() {
        console.log('4. componentDidMount call');
        console.log('5. tmp_state :'+this.state.tmp_state);
        return this.setState({tmp_state2 : true});
    }

    // componentDidMount() 함수는 '생성'단계의 생명주기 함수 중 가장 마지막에 실행.
    // tmp_state2라는 state변수에 true라는 데이터 셋팅.
    // setState() 함수는 변수의 선언과 초기화를 동시에 실행한다.
    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate call / temp_stat = ' + state.tmp_state + ' temp_stat2 =' + state.tmp_state2);
        return state.tmp_state2;
    }
    
    render() {
        console.log('3. render call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}

export default R008;