import * as React from 'react';
import dva from 'dva';
import { Router, Route, Switch } from 'dva/router';
import views from './router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import user from './model/user';

function RouterConfig({ history, app }: any) {
  return (
    <Router history={history}>
      <Switch>
        {views.map(({ path, component })=><Route path={path} key={path} exact component={component} />)}
      </Switch>
    </Router>
  );
}

const app: any = dva();
app.model(user);
app.router(RouterConfig);
app.start('#root');

registerServiceWorker();
