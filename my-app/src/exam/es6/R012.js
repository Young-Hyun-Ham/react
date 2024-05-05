import React, { Component } from "react";
import _ from 'lodash';

class R012 extends Component {
    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props) {
        super(props);
        this.state = {};
    }

    // render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행.
    componentDidMount() {
        
        console.log('==============================================================');
        // ES5 prototype
        var ExamCountFunc = (function () { 
            function ExamCount(num) {
                this.number = num;
            }
            ExamCount.prototype.showNum = function() {
                console.log('1. react_' + this.number);
            }
            function ExamCount2(num) {
                this.numbering = num;
            }
            ExamCount2.prototype.showNum = function(flag) {
                if (flag) console.log('1-1. react_' + this.numbering);
            }
            return ExamCount2;
        }());
        var cnt = new ExamCountFunc('200');
        cnt.showNum(true);

        console.log('==============================================================');
        // ES6 Class
        class ExamCountClass {
            constructor(num2) {
                this.number2 = num2;
            }
            showNum(flag) {
                if (flag) console.log(`2. react_${this.number2}`);
            }
        }

        var cnt2 = new ExamCountClass('2hundread');
        cnt2.showNum(true);
    }


    render () {
        return (
            <h2>[THIS IS Class]</h2>
        )
    }
}

export default R012;