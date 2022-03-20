import logo from './logo.svg';
import { Button } from 'antd'
import './App.css';

class Counter1 extends React.Component {
    state = {
        value: this.props.initialValue,
    }

    render() {
        const {value} = this.state; // 현재의 상태값을 조사하여 value 에 저장
        return <div>Counter1 : {value}</div>;
    }
}

function App() {
  return (
    <div>
       가을 하늘
       <button>Hello</button>
       <Button type='primary' onClick={ () => console.log("클릭") } >ant 버튼</Button>
    </div>
  );
}

export default App;
