import * as React from 'react';
import './Error.css';

export default class Error extends React.Component {
  render() {
    return (<div className="App">
    <header className="App-header">
      <h1 className="App-title">404</h1>
    </header>
    <p className="App-intro">
      找不到页面了啊！啊！啊！
    </p>
  </div>)
  }
}
