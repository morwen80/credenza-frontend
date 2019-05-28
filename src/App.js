import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import ListFaves from './containers/ListFaves';
import PageNotFound from './components/PageNotFound';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/faves' component={ListFaves} />
        <Route path='/about' component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
