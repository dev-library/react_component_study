import React, { useState } from 'react';

const EventPractice = () => {
    // 124페이지 클래스형 컴포넌트로 진행되는 내용을 함수형 컴포넌트로 재구성
    // 128페이지 message변수에 대한 상태관리를 함수형 컴포넌트에 맞춰서 해주세요.
    const [message, setMessage] = useState('');

    function handleClick(){
        alert(message);
        setMessage('');// 제출버튼 누르면 폼 비우기
    }

    const handleChange = (e) => {
        // message 상태에 change가 발생할때마다 갱신된 값이 들어감
        setMessage(e.target.value); 
    }

    // 135페이지에 보면, 이벤트 처리를 input태그 두 개 (username, message)로 사용해
    // 양쪽을 입력하고 확인버튼을 누르면
    // username : message 가 들어간 alert창이 뜹니다.
    // 해당 기능을 현재 사용하는 코드를 고쳐서 만들어주세요.


    return (
        <>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message} // message 상태에 든 값으로 폼 내부 자료가 유지됨
                onChange={handleChange}/>
            <button onClick={handleClick}>확인</button>
        </>
    );
}

export default EventPractice;