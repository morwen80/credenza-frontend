import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import MyCredenza from './containers/MyCredenza';
import FavesContainer from './containers/FavesContainer';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/my-credenza' component={MyCredenza} />
        <Route path='/favourites' component={FavesContainer} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
