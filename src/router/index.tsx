import demo from '../views/Demo';
import error from '../views/Error';

export default [
  {
    path: '/',
    component: demo,
  },
  {
    path: '/demo',
    component: demo,
  },
  {
    path: '*',
    component: error,
  }
];
