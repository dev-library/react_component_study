import React, { useState } from 'react';

const YourComponent = (props) => {
    // 함수를 만들어서 country 변수의 상태관리를 선언해주세요.(useState()를 써주세요.)
    // 초기값은 'ROK'입니다.
    const [country, setCountry] = useState('ROK');

    // 이벤트 함수를 선언해서, 클릭시, 'KOREA' 로 바뀌고 화면도 바뀌게 해 주세요.
    const onClickEvent = () => {
        setCountry("KOREA");
    }

    return (
        <>
            {/* 버튼을 만들어서 위에서 만든 이벤트함수와 연결해주세요 */}
            <button onClick={onClickEvent}>바꾸기!</button>
            <div>내가 만든 컴포넌트! {country}</div>
        </>
    );
}

export default YourComponent;