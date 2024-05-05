// Reactjs code snippets [ rccp ] 로 생성한 파일
import React, { useEffect, useState } from 'react';

function R031(props) {
    const [contents, setContents] = useState('[THIS IS REACT]');
    
    // 최초페이지 로딩 될 때 한번, setContents함수로 state값이 변경 되면 실행
    useEffect(() => {
        console.log('contents : ', contents);
    });

    return (
        <div style={{padding: "0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => {setContents('[THIS IS HOOK]')}}>버튼</button>
        </div>
    )
}

export default R031;