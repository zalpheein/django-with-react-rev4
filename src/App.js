import logo from './logo.svg';
import React from 'react';
import { Button } from 'antd';
import './App.css';

class Counter1 extends React.Component {
    state = {
        value: this.props.initialValue,
    };

    onClick = () => {
        // value 값이 업데이트 되지 않음... 반드시 setState 함수를 이용하여 상태값을 변경해야 함
        // this.state.value += 1

        const value = this.state.value + 1;
        // 상태값을 설정시 setState 이용...상태값 변경 시.. 반드시 setState 함수 이용
        // 하지만 setState 는 비동기로 동작... 그러므로 연속해서 특정 상태값을 변경 하려면...
        // prevState 을 이용하여 순차적 완료 방식으로 코딩 해야함.
        // this.setState( 오브젝트/객체  또는 함수, 콜백함수 ); 1개 인자 또는 콜백을 포함한 2개 인자 지정...콜백 비추

        // 객체일 경우
        this.setState( { value } );

        // 함수일 경우... "바로 직전의 상태값" 인 prevState 가 인자로 반환됨... <---- 사용 권장 방식
        // this.setState( (prevState) => { ~~ } );
        // this.setState( prevState => { ~~ } );
    };

    render() {
        const {value} = this.state; // 현재의 상태값을 조사하여 value 에 저장
        return (
            <div>
                Counter1 : {value}
                <Button onClick={this.onClick}>+1</Button>
            </div>
        );
    };
}


function App() {
  return (
    <div>
       <Counter1 initialValue={10} />
    </div>
  );
}

export default App;
