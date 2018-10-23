import demo from '../views/Demo';
import error from '../views/Error';
import shenma from '../views/Shenma'
export default [
  // {
  //   path: '/',
  //   component: demo,
  // },
  {
    path:'/',
    component:shenma,
  },
  {
    path: '*',
    component: demo,
  },
  {
    path: '*',
    component: error,
  },
  {
    path: '/shenma',
    component: shenma,
  }
  
];
