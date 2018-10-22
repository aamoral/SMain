import * as React from 'react';
import './error.less';


export default class Error extends React.Component {
  render() {
    return (<div id="error">
    <header className="header">
      <h1 className="title">404</h1>
    </header>
    <p className="intro">
      找不到页面了啊！啊！啊！
    </p>
  </div>)
  }
}
