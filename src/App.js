import logo from './logo.svg';
import React from 'react';
import { Button } from 'antd';
import './App.css';

class Counter1 extends React.Component {
    state = {
        value: this.props.initialValue,
    };

    onClick = () => {
        const { value } = this.state;
        // 상태값을 설정시 setState 이용
        this.setState( { value: value + 1 } );
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

class FruitComponent extends React.Component {
    render() {
        const fruits = ["바나나", "사과", "딸기", "수박"]
        return (
            <div>
                <h1>좋아 하는 과일</h1>
                <ul>
                    {   // 중괄호로 시작
                        fruits.map(name => ( // name 으로 순회
                            <li>{name}</li>
                        ))
                    }
                </ul>
            </div>

        )
    };
}


function App() {
  return (
    <div>
       <Counter1 initialValue={10} />
       <FruitComponent />
    </div>
  );
}

export default App;
