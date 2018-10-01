import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Loader } from './containers/Loader/Loader';
import { store } from './redux/root-store';

ReactDOM.render(
  <Provider store={store}>
    <Loader />
  </Provider>,
  document.getElementById('app-root'),
);
