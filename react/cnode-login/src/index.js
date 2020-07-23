import React from 'react';
import ReactDOM from 'react-dom'; // index.js  入口文件
import App from './App'; // 模块机制
// css in js   webpack  
import './index.css';  // 像js 引入  
// 跟link 标签say byebye

ReactDOM.render(

  <App />,

  document.getElementById('root')
)