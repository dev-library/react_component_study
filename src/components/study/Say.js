import React, { useState } from 'react';

const Say = (props) => { // props 대신 {프로퍼티명1, 프로퍼티명2...} 로 전달 가능
    // 아래 문법을 통해서, 변수값이 변경될 때 화면도 다시 렌더링(그려지게) 할 수 있습니다.
    // const [관리할변수명, set관리할변수명] = useState(초기값);
    // msg를 기준으로 해보겠습니다.
    // 한 컴포넌트 내부에서 useState() 의 사용 횟수는 제한이 없습니다.
    // 다만, 너무 과도하게 많은 경우는 컴포넌트 분리를 해서 관리합니다.
    const [msg, setMsg] = useState(props.msg);


    // 아래 함수가 실행되면 msg변수에 든 값을 싸왓디크랍으로 바꿉니다.
    const onClickEvent = () => {
        setMsg('싸왓디크랍'); // msg변수의 값을 싸왓디크랍으로 변경하고 화면도 다시그려라.
    }
        
    return (
        <div>
            {/* 이벤트 바인딩시는, 카멜케이스로 변형해서 합니다.
                on이벤트명={위에서선언한함수} */}
            <button onClick={onClickEvent}>변경</button>
            <div>인사하겠습니다 : {msg}</div>
        </div>
    );

}

export default Say;