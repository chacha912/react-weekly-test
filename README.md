# 01. Stepper 컴포넌트 만들기 

✅ Figma 디자인 파일을 분석해 `stepper react 컴포넌트` 설계하기  

[📌 컴포넌트 demo](https://chacha912.github.io/react-weekly-test/)   
 
![stepper figma 디자인](./img/ezgif.com-gif-maker.gif)  

## 기능 요구사항

- 가급적 UI 디자인 시안과 최대한 비슷하게 구현해야 합니다. (글꼴, 크기, 색상, 간격, 효과 등)  
- 컴포넌트 모드, 상태 처리 등을 고려해 설계하세요. (mode, min, max, current, step 등)  
- 숫자 값 자리수에 따라 유연하게 좌우 버튼이 배치되도록 구현합니다. (너비 또는 높이 고정 X)  
- 컴포넌트 테스트 수행은 권장사항(옵션)입니다.

## 커밋로그

2c2627c | Init project using CRA| 
:--:|:--

- 현재 폴더에 CRA 생성하기 `npx create-react-app .`  

95c9f31 | Markup and style Stepper component|
:--:|:--

- stepper 컴포넌트 마크업, 스타일 적용 후, 렌더링하기  
- 컴포넌트 절대 경로 호출 : `jsconfig.json` 에 `baseUrl` 설정 (React CRA 툴체인 참고)  
- 키보드 포커스 적용 [focus-within vs focus-visible](https://bharathvaj.me/blog/focus-vs-within-vs-visible)  
  - focus-within : 포커스를 받았거나, 자손이 포커스를 받았을 경우    
  - focus-visible : user-agent가 focus되는 요소 결정, 주로 마우스와 키보드 포커스 스타일 구분할 때 사용.   
    - `element:focus:not(:focus-visible)` : 마우스로 포커스   
    - `element:focus-visible` : 키보드로 포커스   

- 화살표 아이콘 svg 파일 하나로 색상, 회전 적용해 재사용하기    
  - svg 컴포넌트의 props로 속성 전달하기   
      ```javascript
      // svg 를 리액트 컴포넌트로 import
      import { ReactComponent as SvgIconArrow } from 'assets/arrow.svg';

      <SvgIconArrow fill="#f00" transform="rotate(30)" /> 
      ```  
  - svg 컴포넌트에 클래스 추가하여 css로 제어하기✨   
      `<SvgIconArrow className="icon-minus" />`  
- `vertical` 모드일 때, 카운트 증가버튼이 먼저 나와야 함.  `display:flex`에서 아이템 `order`의 기본값은 `0`이다. 아이템에 `order: -1`를 적용하여 순서를 변경할 수 있다. 숫자가 작을 수록 앞에 배치  


e72afbe | Check prop-types|
:--:|:--

- prop-types 모듈 dev-dependency로 설치 : `npm i -D prop-types`   
- `MultiTypes`, `ButtonType` 만들어 사용  
- min, max, step, current 값을 number 또는 string 타입이 가능하도록 하여, 값 비교할 때 계속 number 타입으로 변환해야 되서 번거로움. 숫자가 아닌 문자가 들어올 경우도 처리해야함. -> number 타입만 체크하는 게 좋을 것 같다.

7a0fda5 | Add count state & handleCountUpdate|
:--:|:--

- count 상태 추가  
- 버튼클릭 이벤트핸들러 등록 (count변경하는 handleCountUpdate 함수)

066cab0 | Check valid count value and Apply disabled attribute |
:--:|:--

- `getDerivedStateFromProps` 사용하여 `isMinValue`, `isMaxValue` 상태 추가  
- 최소/최대값 도달했을 때 `disabled` 속성으로 버튼 비활성화  
- 값 업데이트 시, min/max 넘어갈 경우 min/max 값으로 변경 적용  

2e7d982 | Add Error handling for min, max, current props
:--:|:--

- 컴포넌트 props 전달시 min, max, current 값 체크하여 error 명시     
- `isMinValue`, `isMaxValue` 상태를 `handleCountUpdate` 함수에서 체크하는 것으로 변경  