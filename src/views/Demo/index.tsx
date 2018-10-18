import * as React from 'react';
import { connect } from 'dva';
import './Demo.css';


import logo from '../../logo.svg';

interface iProps {
  login: (username: string, password: string) => void;
  isLoading: boolean;
  user: any;
}
class App extends React.Component<iProps> {
  public componentDidMount() {
    this.props.login('Harry', '123');
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.isLoading ? '登录中...' : `你好！${this.props.user.name}`}</h1>
        </header>
        <p className="App-intro">
          这是你们的第一个项目。目前只有一个用户加载案例
        </p>
      </div>
    );
  }
}

export default connect((state: any) => ({
  user: state.user,
  isLoading: state.user.loadType === 3
}), (dispatch: Function) => ({
  login: (username: string, password: string) => {
    dispatch(
      {
        type: "user/login",
        payload: {
          name: username,
          password
        }
      }
    )
  }
}))(App);
