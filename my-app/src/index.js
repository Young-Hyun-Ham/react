import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* React.StrictMode 때문에 console.log 2번찍힘
  
  * StrictMode란 - 리액트 공식 문서에 따르면 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구이며,
  Fragment와 같이 UI를 렌더링하지 않고, 자손들에 대한 부가적인 검사와 경고를 활성화 한다고 합니다.
  그리고 StrictMode는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향을 끼치지 않습니다.

  * 그렇다면 왜?
  StrictMode에 대해서는 알아 봤는데 그래서 왜 StrictMode로 감싸면 왜 두 번씩 렌더링이 되는것인지에 대해 알아보자면,
  우선 StrictMode는 아래와 같은 부분에서 도움을 주고 있습니다.

  . 안전하지 않은 생명주기를 사용하는 컴포넌트 발견
  . 레거시 문자열 ref 사용에 대한 경고
  . 권장되지 않는 findDOMNode 사용에 대한 경고
  . 예상치 못한 부작용 검사
  . 레거시 context API 검사
  . 재사용 가능한 상태 보장
  
  여기서 중요한사항은 예상치 못한 부작용 검사입니다.
  클래스 컴포넌트의 메서드를 포함해 렌더링 단계 생명주기 메서드들(constructor, componentWillMount, render
  setState 등등)이 여러 번 호출될 수 있기 때문에, 부작용을 포함하지 않는 것이 중요합니다.
  이 규칙을 무시할 경우, 메모리 누수 혹은 잘못된 애플리케이션 상태 등 다양한 문제를 일으킬 가능성이 있습니다.
  하지만 불행히도, 보통 이러한 문제들은 예측한 대로 동작하지 않기 때문에 발견하기가 어려울 수 있습니다.


  그래서 StrictMode가 자동으로 부작용을 찾아주는 것은 불가능하지만,
  의도적으로 두 번 호출하여 예상치 못한 문제가 되는 부분을 발견하도록 도와주고 있는 것입니다.
  ※ 위에서 설명했듯이 개발 모드에서만 적용됩니다. 생명주기 메서드들은 프로덕션 모드에서 이중으로 호출되지 않습니다.
  */
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
