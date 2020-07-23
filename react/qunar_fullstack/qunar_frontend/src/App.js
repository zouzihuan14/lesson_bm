import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  fetch('http://localhost:80/rest/cities')
  .then(data=>data.json())
  .then(data=>{
    console.log(data)
  })
  return (
    <div></div>
  );
}

export default App;
