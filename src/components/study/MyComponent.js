import React from "react"; // 모든 컴포넌트 최상단에 선언해야 했으나, 리액트 17버전부터 생략해도 돌아감.
import PropTypes from 'prop-types';// 자료형 검사, 타스 쓰면 해결되니 알고만 계세요.

// 컴포넌트 파일명과 일치하는 함수를 생성해서, 커스텀 컴포넌트 생성
const MyComponent = (props) => { // 부모쪽에서 전달받을 요소가 있다면, 화살표함수에 객체를 선언합니다.
    const {name, children} = props; // 내부 벨류값을 name과 children 변수에 할당
    console.log(props);


    return (
        <div>{children} / 안녕하세요, 제 이름은 {name}입니다.</div>
        );
}

// props가 전달되지 않았을때 넣어줄 디폴트값 설정
MyComponent.defaultProps =  {
    name : '뉴진스'
}

// 넘어온 데이터의 타입 검사
MyComponent.propTypes = {
    name : PropTypes.string // name의 자료형은 문자로만 받겠다.
}

export default MyComponent; // 작성된 함수형 컴포넌트를 외부에서 쓸 수 있도록 내보내기.

// YourComponent.js를 만들어서, App.js에 두 번 출력해보세요.