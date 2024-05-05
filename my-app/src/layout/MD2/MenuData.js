
// lifeCycle 
import R003 from '../../exam/lifeCycle/R003';
import R004 from '../../exam/lifeCycle/R004';
import R005 from '../../exam/lifeCycle/R005';
import R006 from '../../exam/lifeCycle/R006';
import R007 from '../../exam/lifeCycle/R007';
import R008 from '../../exam/lifeCycle/R008';

// Es6
import R009 from '../../exam/es6/R009';
import R010 from '../../exam/es6/R010';
import R011 from '../../exam/es6/R011';
import R012 from '../../exam/es6/R012';
import R013 from '../../exam/es6/R013';
import R014 from '../../exam/es6/R014';
import R015 from '../../exam/es6/R015';
import R016 from '../../exam/es6/R016';

// basic
import R017 from '../../exam/basic/R017';
import R018 from '../../exam/basic/R018';
import R019 from '../../exam/basic/R019';
import R020 from '../../exam/basic/R020';
import R021 from '../../exam/basic/R021';
import R022 from '../../exam/basic/R022';
import R023 from '../../exam/basic/R023';
import R024 from '../../exam/basic/R024';
import R025 from '../../exam/basic/R025';
import R026 from '../../exam/basic/R026';
import R027 from '../../exam/basic/R027';
import R028 from '../../exam/basic/R028';
import R029 from '../../exam/basic/R029';
import R030 from '../../exam/basic/R030';
import R031 from '../../exam/basic/R031';
import R032 from '../../exam/basic/R032';
import R033 from '../../exam/basic/R033';
import R034 from '../../exam/basic/R034';
import R035 from '../../exam/basic/R035';
import R036 from '../../exam/basic/R036';

const menuItems1 = [
    {
      id: 1,
      title: 'exam',
      children: [
        { 
            id: 10,
            title: 'lifeCycle',
            children: [
              { id: 100, title: 'R003: Component', path: '/lifeCycle/R003', content: <R003 /> },
              { id: 101, title: 'R004 : 생명주기 함수 render()', path: '/lifeCycle/R004', content: <R004 /> },
              { id: 102, title: 'R005: 생명주기 함수 constructor(props)', path: '/lifeCycle/R005', content: <R005 /> },
              { id: 103, title: 'R006: 생명주기 함수 static getDerivedStateFormProps(props, state)', path: '/lifeCycle/R006', content: <R006 /> },
              { id: 104, title: 'R007: 생명주기 함수 componentDidMount()', path: '/lifeCycle/R007', content: <R007 /> },
              { id: 105, title: 'R008: 생명주기 함수 shouldComponentUpdate()', path: '/lifeCycle/R008', content: <R008 /> },
            ],
          },
        { 
            id: 20,
            title: 'es6',
            children: [
                { id: 201, title: 'R009: 템플릿 문자열 사용하기', path: '/es6/R009', content: <R009 /> },
                { id: 202, title: 'R010: var, let, const 사용하기', path: '/es6/R010', content: <R010 /> },
                { id: 203, title: 'R011: 전개 연산자 사용하기', path: '/es6/R011', content: <R011 /> },
                { id: 204, title: 'R012: class 사용하기', path: '/es6/R012', content: <R012 /> },
                { id: 205, title: 'R013: 화살표 함수 사용하기', path: '/es6/R013', content: <R013 /> },
                { id: 206, title: 'R014: forEach() 함수 사용하기', path: '/es6/R014', content: <R014 /> },
                { id: 207, title: 'R015: map() 함수 사용하기', path: '/es6/R015', content: <R015 /> },
                { id: 208, title: 'R016: jquery 사용하기', path: '/es6/R016', content: <R016 /> },
            ],
          },
        {
          id: 30,
          title: 'basic',
          children: [
            { id: 301, title: 'R017: props 사용하기', path: '/basic/R017', content: <R017 /> },
            { id: 302, title: 'R018: props 자료형 선언하기', path: '/basic/R018', content: <R018 params='{s: "react", n: 200, b: true, a: [0,1,8], o: {react: "리액트", twohundred:"200"}, f: () => {console.log("1111");} }' /> },
            { id: 303, title: 'R019: props Boolean으로 사용하기', path: '/basic/R019', content: <R019 /> },
            { id: 304, title: 'R020: props 객체형으로 사용하기', path: '/basic/R020', content: <R020 /> },
            { id: 305, title: 'R021: props를 필수 값으로 사용하기', path: '/basic/R021', content: <R021 /> },
            { id: 306, title: 'R022: props를 기본값으로 정의하기', path: '/basic/R022', content: <R022 /> },
            { id: 307, title: 'R023: props의 자식 Component에 node 전달하기', path: '/basic/R023', content: <R023 /> },
            { id: 308, title: 'R024: state 사용하기', path: '/basic/R024', content: <R024 /> },
            { id: 309, title: 'R025: setState() 함수 사용하기', path: '/basic/R025', content: <R025 /> },
            { id: 310, title: 'R026: state를 직접 변경한 후 forceUpdate() 함수 사용하기', path: '/basic/R026', content: <R026 /> },
            { id: 311, title: 'R027: Component 사용하기(class형 컴포넌트)', path: '/basic/R027', content: <R027 /> },
            { id: 312, title: 'R028: PureComponent 사용하기(class형 컴포넌트)', path: '/basic/R028', content: <R028 /> },
            { id: 313, title: 'R029: shallow-equal 사용하기(class형 컴포넌트)', path: '/basic/R029', content: <R029 /> },
            { id: 314, title: 'R030: 함수형 컴포넌트 사용하기', path: '/basic/R030', content: <R030 /> },
            { id: 315, title: 'R031: hook 사용하기', path: '/basic/R031', content: <R031 /> },
            { id: 316, title: 'R032: Fragments 사용하기', path: '/basic/R032', content: <R032 /> },
            { id: 317, title: 'R033: map()으로 element 사용하기', path: '/basic/R033', content: <R033 /> },
            { id: 318, title: 'R034: reactstrap Alerts 사용하기', path: '/basic/R034', content: <R034 /> },
            { id: 319, title: 'R035: reactstrap Bdge 사용하기', path: '/basic/R035/123', content: <R035 /> },
            { id: 320, title: 'R036: reactstrap Breadcurumbs 사용하기', path: '/basic/R036', content: <R036 params='{data: [1,2,3,4,5]}' /> },
          ],
        },
      ],
    },
  ];

  
const menuItems2 = [
  {
    id: 1,
    lev: 1,
    title: 'exam',
    children: [
      { 
          id: 10,
          lev: 2,
          title: 'lifeCycle',
          children: [
            { id: 100, lev: 3, title: 'R003: Component', content: <R003 /> },
            { id: 101, lev: 3, title: 'R004 : 생명주기 함수 render()', content: <R004 /> },
            { id: 102, lev: 3, title: 'R005: 생명주기 함수 constructor(props)', content: <R005 /> },
            { id: 103, lev: 3, title: 'R006: 생명주기 함수 static getDerivedStateFormProps(props, state)', content: <R006 /> },
            { id: 104, lev: 3, title: 'R007: 생명주기 함수 componentDidMount()', content: <R007 /> },
            { id: 105, lev: 3, title: 'R008: 생명주기 함수 shouldComponentUpdate()', content: <R008 /> },
          ],
        },
      { 
          id: 20,
          lev: 2,
          title: 'es6',
          children: [
              { id: 201, lev: 3, title: 'R009: 템플릿 문자열 사용하기', content: <R009 /> },
              { id: 202, lev: 3, title: 'R010: var, let, const 사용하기', content: <R010 /> },
              { id: 203, lev: 3, title: 'R011: 전개 연산자 사용하기', content: <R011 /> },
              { id: 204, lev: 3, title: 'R012: class 사용하기', content: <R012 /> },
              { id: 205, lev: 3, title: 'R013: 화살표 함수 사용하기', content: <R013 /> },
              { id: 206, lev: 3, title: 'R014: forEach() 함수 사용하기', content: <R014 /> },
              { id: 207, lev: 3, title: 'R015: map() 함수 사용하기', content: <R015 /> },
              { id: 208, lev: 3, title: 'R016: jquery 사용하기', content: <R016 /> },
          ],
        },
      {
        id: 30,
        lev: 2,
        title: 'basic',
        children: [
          { id: 301, lev: 3, title: 'R017: props 사용하기', content: <R017 /> },
          { id: 302, lev: 3, title: 'R018: props 자료형 선언하기', content: <R018 s="react" n={200} b={true} a={[0,1,8]} o={{react:"리액트", twohundred:"200"}} f={() => {console.log("1111");}} /> },
          { id: 303, lev: 3, title: 'R019: props Boolean으로 사용하기', content: <R019 /> },
          { id: 304, lev: 3, title: 'R020: props 객체형으로 사용하기', content: <R020 /> },
          { id: 305, lev: 3, title: 'R021: props를 필수 값으로 사용하기', content: <R021 /> },
          { id: 306, lev: 3, title: 'R022: props를 기본값으로 정의하기', content: <R022 /> },
          { id: 307, lev: 3, title: 'R023: props의 자식 Component에 node 전달하기', content: <R023 /> },
          { id: 308, lev: 3, title: 'R024: state 사용하기', content: <R024 /> },
          { id: 309, lev: 3, title: 'R025: setState() 함수 사용하기', content: <R025 /> },
          { id: 310, lev: 3, title: 'R026: state를 직접 변경한 후 forceUpdate() 함수 사용하기', content: <R026 /> },
          { id: 311, lev: 3, title: 'R027: Component 사용하기(class형 컴포넌트)', content: <R027 /> },
          { id: 312, lev: 3, title: 'R028: PureComponent 사용하기(class형 컴포넌트)', content: <R028 /> },
          { id: 313, lev: 3, title: 'R029: shallow-equal 사용하기(class형 컴포넌트)', content: <R029 /> },
          { id: 314, lev: 3, title: 'R030: 함수형 컴포넌트 사용하기', content: <R030 /> },
          { id: 315, lev: 3, title: 'R031: hook 사용하기', content: <R031 /> },
          { id: 316, lev: 3, title: 'R032: Fragments 사용하기', content: <R032 /> },
          { id: 317, lev: 3, title: 'R033: map()으로 element 사용하기', content: <R033 /> },
          { id: 318, lev: 3, title: 'R034: reactstrap Alerts 사용하기', content: <R034 /> },
          { id: 319, lev: 3, title: 'R035: reactstrap Bdge 사용하기', content: <R035 userId={123} /> },
          { id: 320, lev: 3, title: 'R036: reactstrap Breadcurumbs 사용하기', content: <R036 data={[1,2,3,4,5]} /> },
        ],
      },
    ],
  },
];
  
  export default menuItems2;
  