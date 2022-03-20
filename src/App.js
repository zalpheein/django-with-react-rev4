import logo from './logo.svg';
import React from 'react';
import { Button } from 'antd';
import './App.css';

class Counter1 extends React.Component {
    state = {
        value: this.props.initialValue,
    }

    render() {
        const {value} = this.state; // 현재의 상태값을 조사하여 value 에 저장
        return (
            <div>
                Counter1 : {value}
                <Button>+1</Button>
            </div>
        );
    }
}

function App() {
  return (
    <div>
       <Counter1 initialValue={10} />
       <Counter1 initialValue={10} />
       <Counter1 initialValue={10} />
    </div>
  );
}

export default App;
