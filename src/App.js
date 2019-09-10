import React from 'react';
import 'style/test.less'
import { Button } from 'antd'

function App(props) {
  // console.log(props.children)
  //在react 中想要获取 标签里面的东西  可以通过props.children获取
  return (
    <div className="App">
      <header className="App-header">
        {props.children}
      </header>
    </div>
  );
}

export default App;
