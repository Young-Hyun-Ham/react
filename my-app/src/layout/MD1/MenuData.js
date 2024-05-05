// menuData.js
const menuItems = [
    {
      id: 1,
      title: 'exam',
      children: [
        { 
            id: 10,
            title: 'lifeCycle',
            children: [
              { id: 100, title: 'R003: Component', path: '/lifeCycle/R003' },
              { id: 101, title: 'R004', path: '/lifeCycle/R004' }, // : 생명주기 함수 render()
              { id: 102, title: 'R005: 생명주기 함수 constructor(props)', path: '/lifeCycle/R005' },
              { id: 103, title: 'R006: 생명주기 함수 static getDerivedStateFormProps(props, state)', path: '/lifeCycle/R006' },
              { id: 104, title: 'R007: 생명주기 함수 componentDidMount()', path: '/lifeCycle/R007' },
              { id: 105, title: 'R008: 생명주기 함수 shouldComponentUpdate()', path: '/lifeCycle/R008' },
            ],
        },
        { 
            id: 20,
            title: 'es6',
            children: [
                { id: 201, title: 'R009: 템플릿 문자열 사용하기', path: '/es6/R009' },
                { id: 202, title: 'R010: var, let, const 사용하기', path: '/es6/R010' },
                { id: 203, title: 'R011: 전개 연산자 사용하기', path: '/es6/R011' },
                { id: 204, title: 'R012: class 사용하기', path: '/es6/R012' },
                { id: 205, title: 'R013: 화살표 함수 사용하기', path: '/es6/R013' },
                { id: 206, title: 'R014: forEach() 함수 사용하기', path: '/es6/R014' },
                { id: 207, title: 'R015: map() 함수 사용하기', path: '/es6/R015' },
                { id: 208, title: 'R016: jquery 사용하기', path: '/es6/R016' },
            ],
        },
        {
          id: 30,
          title: 'basic',
          children: [
            { id: 301, title: 'R017: props 사용하기', path: '/basic/R017' },
            { id: 302, title: 'R018: props 자료형 선언하기', path: '/basic/R018', params: {s: "react", n: 200, b: true, a: [0,1,8], o: {react: "리액트", twohundred:"200"}, f: () => {console.log("1111");} } },
            { id: 303, title: 'R019: props Boolean으로 사용하기', path: '/basic/R019' },
            { id: 304, title: 'R020: props 객체형으로 사용하기', path: '/basic/R020' },
            { id: 305, title: 'R021: props를 필수 값으로 사용하기', path: '/basic/R021' },
            { id: 306, title: 'R022: props를 기본값으로 정의하기', path: '/basic/R022' },
            { id: 307, title: 'R023: props의 자식 Component에 node 전달하기', path: '/basic/R023' },
            { id: 308, title: 'R024: state 사용하기', path: '/basic/R024' },
            { id: 309, title: 'R025: setState() 함수 사용하기', path: '/basic/R025' },
            { id: 310, title: 'R026: state를 직접 변경한 후 forceUpdate() 함수 사용하기', path: '/basic/R026' },
            { id: 311, title: 'R027: Component 사용하기(class형 컴포넌트)', path: '/basic/R027' },
            { id: 312, title: 'R028: PureComponent 사용하기(class형 컴포넌트)', path: '/basic/R028' },
            { id: 313, title: 'R029: shallow-equal 사용하기(class형 컴포넌트)', path: '/basic/R029' },
            { id: 314, title: 'R030: 함수형 컴포넌트 사용하기', path: '/basic/R030' },
            { id: 315, title: 'R031: hook 사용하기', path: '/basic/R031' },
            { id: 316, title: 'R032: Fragments 사용하기', path: '/basic/R032' },
            { id: 317, title: 'R033: map()으로 element 사용하기', path: '/basic/R033' },
            { id: 318, title: 'R034: reactstrap Alerts 사용하기', path: '/basic/R034' },
            { id: 319, title: 'R035: reactstrap Bdge 사용하기', path: '/basic/R035/123' },
            { id: 320, title: 'R036: reactstrap Breadcurumbs 사용하기', path: '/basic/R036', params: {data: [1,2,3,4,5]} },
          ],
        },
      ],
    },
  ];
  
  export default menuItems;
  