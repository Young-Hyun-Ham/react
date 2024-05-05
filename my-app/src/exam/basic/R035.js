// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';

const User = (params) => {
    const { userId } = useParams();
    console.log("userId : ", userId, params.str, params.len);
    return <div>User ID: {params.userId}</div>;
};

class R035 extends Component {

    // 생명주기중 가장 먼저 실행 되며, 처음 한 번만 호출 된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화 할 때 사용한다.
    constructor(props) {
        super(props);
        // 태그에 어트리뷰트 값을 props parameter로 가져온다.
        console.log('constructor ====> ', this.props);
        this.state = {};
    }

    render() {
        const str = "strTest";
        
        return (
            <div>
                <h1>PRODUCT NAME <Badge color='secondary'>hit</Badge></h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <User userId={this.props.userId} str={str} len="5"/>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://localhost:3000/basic/R035/123" color="black">GoLink</Badge>
            </div>
        );
    }
}

R035.propTypes = {

};

export default R035;
