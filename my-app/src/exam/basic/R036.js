// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'reactstrap';
import { useLocation  } from 'react-router-dom';

const User = (data) => {
    //const location = useLocation();
    //const { data } = location.state; // Access state
    console.log("location.state : ", data);

    return (
        <>
            {data.param.map((item) => (
                <div>{item}</div>
            ))}
        </>
    );
};

class R036 extends Component {

    render() {
        let {data} = this.props;

        return (
            <div>
                <h1>PRODUCT NAME <Badge color='secondary'>hit</Badge></h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <User param={data} />
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://localhost:3000" color="black">GoLink</Badge>
            </div>
        );
    }
}

R036.propTypes = {

};

export default R036;
