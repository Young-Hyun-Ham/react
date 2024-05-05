import React, { Component } from "react";
import _ from 'lodash';

class R011 extends Component {
    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props) {
        super(props);
        this.status = {};
    }

    // render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행.
    componentDidMount() {
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];
        var varArray3 = {
            id: 22,
            name: 'yj',
            link: {
              github: 'http://~',
              instagram: 'http://~',
            },
          };
        var sumVarArr1 = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        var sumVarArr2 = [].concat(varArray1, varArray2);
        console.log('1. sumVarArr1 : '+sumVarArr1);
        console.log('1. sumVarArr2 : '+sumVarArr2);

        // ES6 Array
        // 얉은 복사 (Shallow copy) : 객체의 1depth까지만 복사하는 것을 말한다.
        // 사용법 : ...변수명
        let sumLetArr = [...varArray1, ...varArray2]; 
        console.log('2. sumLetArr : '+sumLetArr);
        const [sum1, sum2, sum3, ...remain] = sumLetArr; // const 배열로 선언을 하면 총 4개 배열을 선언 할 수 있다.
        console.log('3. sum1 : '+sum1+', sum2 : '+sum2+', remain : '+remain);
        console.log('3. sum3 : '+sum3+', remain : '+remain);
        
        // 중요!!!!!!
        const [...hap] = sumLetArr;
        console.log('4. hap : '+hap);

        // 메모리주소를 공유 하지 않는다.
        varArray1 = ['1', '2'];
        console.log('5. sumVarArr1 : '+sumVarArr1);
        console.log('5. sumLetArr : '+sumLetArr);
        
        // 깊은복사, 얉은복사... ??? 개념이 ...
        // 처리 할때는 얉은 복사 해도 될 듯 ... 어짜피.. 값이 바뀌기 때문에 
        let letArr = {...varArray3};
        if ( 1 == 1 ) { // 변경유무에 따라 비교값이 true, false로 변경 됨.
            varArray3.link = {github: 'http://~', instagram: 'http://~',}; // 같은 값이여도 변경 된걸로 친다.
            console.log('6. 얉은복사 변경이 일어 났다 : ',varArray3.link === letArr.link, varArray3.link, letArr.link);
        } else {
            console.log('6. 얉은복사 변경없음. : ',varArray3.link === letArr.link, varArray3.link, letArr.link);
        }

        // 얉은 복사는 1dept는 서로 주소를 공유 하지 않고, 2dept 부터는 주소를 공유한다.
        console.log('6. 얉은복사 : ',varArray3.link === letArr.link, varArray3.link, letArr.link);
        
        // 깊은 복사는 전dept의 주소를 공유 하지 않는다. 
        const JSONVarArray3 = JSON.parse(JSON.stringify(varArray3));
        const lodashVarArray3 = _.cloneDeep(varArray3);
        console.log('6. 깊은복사 : ',varArray3.link === lodashVarArray3.link, varArray3.link, lodashVarArray3.link);

        console.log('==============================================================');
    }

    render () {
        return (
            <h2>[THIS IS SpreadOperator]</h2>
        )
    }
}

export default R011;