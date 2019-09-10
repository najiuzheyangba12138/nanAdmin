import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import axios from 'utils/axios.js'

React.Component.prototype.$axios = axios
//Vue 的实例继承自组件   vue是个函数
//react和组件不是继承关系  react是个对象  Component是react下main的一个方法
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
