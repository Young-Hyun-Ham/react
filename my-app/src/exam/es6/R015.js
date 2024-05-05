import React, { Component } from "react";
import _ from 'lodash';

class R015 extends Component {
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
    }

    // render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행.
    componentDidMount() {
        console.log('==============================================================');
        var mapArr = [3,2,8,8];
        let mapNewArr = mapArr.map(x => x);
        console.log("1. mapNewArr : ["+mapNewArr+"]");
        
        let mapMulitiArr = mapArr.map(x => x * 2);
        console.log("2. mapMultiNewArr : ["+mapMulitiArr+"]");
        
        var objArr = [
            {key:'react', value:'200'},
            {key:'리엑트', value:'TwoHundred'},
        ];
        let mapObjNewArr = objArr.map((obj, index) => {
            console.log((index+3)+". obj : "+ JSON.stringify(obj));
            var obja = {};
            obja[obj.key] = obj.value;
            return obja;
        });
        console.log("5. mapObjNewArr : "+JSON.stringify(mapObjNewArr));


    }

    render () {
        return (
            <h2>[THIS IS Map]</h2>
        )
    }
}

export default R015;