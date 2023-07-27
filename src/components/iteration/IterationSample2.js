import React, { useState } from 'react';

const IterationSample2 = () => {
    const [names, setNames] = useState([
                                    {id: 1, text: "눈사람"},
                                    {id: 2, text: "얼음"},
                                    {id: 3, text: '눈'},
                                    {id: 4, text: '바람'}
                                ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 위에 4번까지 있으므로 5번부터

    // 삭제를 수행해주는 함수 선언
    const onDoubleClickComponent = (id) => {
        alert("해당 요소를 삭제합니다.");
        // 더블클릭한 번호가 아닌 자바스크립트 객체들만 리스트에 남긴채 저장
        setNames(prevState => prevState.filter(name => name.id !== id));
    }

    const namesList = names.map(name => 
                <li key={name.id} 
                    onDoubleClick={() => onDoubleClickComponent(name.id)}>
                    {name.text}
                </li>
                );
    {/* 1. onChange를 이용해서, 해당 input태그에 작성된 내용이 즉시
        inputText 상태변수에 반영되도록 이벤트를 바인딩해주세요.
        
        2. 버튼클릭시 inputText에 적힌 내용이 alert로 찍히고,
            상태변수는 '' 로 변경되게 해 주세요.
        
        3.(옵션) setNames를 이용해서 names 리스트에 내가 방금 추가한
            text정보가 화면에도 반영되도록 수정해보세요.*/}

    const onChangeInput = (e) => {
        setInputText(e.target.value);// 해당 인풋에 작성된 내용을 inputText에 저장
    } 

    const onClickButton = () => {
        //alert(inputText);
        alert(inputText + "데이터를 추가합니다.");
        // 기존 데이터 목록에 신규 데이터를 불변성을 지키면서 추가하기.
        setNames([...names, {id:nextId, text:inputText}]);
        // nextId는 중복되면 안되니까 1 증가시킨 값으로 갱신
        setNextId(nextId + 1);

        setInputText('');
    }

    return (
        <>
            <input type="text" value={inputText} onChange={onChangeInput} />
            <button onClick={onClickButton}>목록에 추가</button>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample2;