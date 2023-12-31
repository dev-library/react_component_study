import React from 'react';
import MyComponent from './components/study/MyComponent';
import YourComponent from './components/study/YourComponent';
import Say from './components/study/Say';
import ArrayChange from './components/study/ArrayChange';
import EventPractice from './components/eventhandling/EventPractice';
import IterationSample from './components/iteration/IterationSample';
import IterationSample2 from './components/iteration/IterationSample2';
import Counter from './components/hooks/Counter';
import Info from './components/hooks/Info';
import Average from './components/hooks/Average';
import CSSModule from './components/cssmodule/CssModule';




function App() {
  return (
    <>
      {/* propertie명은 자유롭게 지정해주시면 됩니다.
      다만 받는 쪽에서도 전달해줄떄 사용해준 명칭을 사용해야 연결됩니다. */}
      {/*<MyComponent name="리액트">사이에 적은 내용</MyComponent>*/}
      {/* 여러분들이 YourComponent에, country라는 명칭으로 나라이름을 넣어서
      전달해주시고, YourComponent.js에서 DIV태그 사이에 실제로 출력도 해 보세요.*/}
      {/*<YourComponent country="한국" />
      <Say msg="안녕하세요" />
      <ArrayChange />*/}

      {/* 4장까지 완료 */}
      {/*<EventPractice />*/}

      {/* 6장까지 완료 */}
      {/*<IterationSample2 />*/}

      {/*<Counter />*/}
      {/*<Info />*/}

      {/*<Average />*/}

      <CSSModule />
    </>
  );
}

export default App;
