import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppStack from '../AppStack';

const history = createBrowserHistory();
const Routes = () => {
  return (
    <Router history={history}>
      <AppStack />
    </Router>
  );
};

export default Routes;

// import React from 'react';
// const Routes = () => {
//   return <div>{'asdasdasd'}</div>;
// };
// export default Routes;
///////
