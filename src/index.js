import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux'
injectTapEventPlugin();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
  )
);

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
