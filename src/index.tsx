import * as React from 'react';
import dva from 'dva';
import { Router, Route, Switch } from 'dva/router';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import user from './model/user';

function RouterConfig({ history, app }: any) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  );
}

const app: any = dva();
app.model(user);
app.router(RouterConfig);
app.start('#root');

registerServiceWorker();
