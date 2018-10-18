import * as React from 'react';
import dva from 'dva';
import { Router, Route, Switch } from 'dva/router';
import Demo from './views/Demo';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import user from './model/user';

function RouterConfig({ history, app }: any) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Demo} />
        <Route path="/demo" exact component={Demo} />
      </Switch>
    </Router>
  );
}

const app: any = dva();
app.model(user);
app.router(RouterConfig);
app.start('#root');

registerServiceWorker();
