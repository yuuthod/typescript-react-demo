import React from "react";
import ReactDOM from "react-dom";
// import { createGlobalStyle } from "styled-components";
// 어떤 라이브러리를 설치하고 import할때에도 타입을 설정해주지 않으면 오류가 나는데
// package.json 안에 셋팅되어있고,
// 참고 : https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
// yarn add @types/styled-components 를 사용해 type을 셋팅 해주면 된다.
// 또한 사용할때에 해당 라이브러리에 대한 모든 요소를 알고있기 때문에 실수를 줄일 수 있다.
import App from "./App";

//const plus = (a, b) => a + b;
// type을 정해주지 않으면 오류가 나는데
// 너무 귀찮아지기 때문에 셋팅값을 추가해준다.
// tsconfig.json
// "noImplicitAny": false 추가

ReactDOM.render(<App />, document.getElementById("root"));
