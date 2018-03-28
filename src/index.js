import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';
import Home from './components/Home';
import { Switch } from 'react-router'
import { Link, Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const store = configureStore();

const App = () => (
  <div>
    <h1>Welcome to a minimal React-Redux-Thunk (with Routing) App with API setup</h1>
    <nav><Link to="/">Screen 1</Link> | <Link to="/items">Screen 2</Link></nav>
    <br /><br /><br />
    <Switch>
      <Route exact path="/items" component={ItemList} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
)

render(
    <Provider store={store}>
    	<Router history={history}>
        	<App />
        </Router >
    </Provider>,
    document.getElementById('app')
);
