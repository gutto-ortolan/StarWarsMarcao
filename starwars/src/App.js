import React from 'react';
import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Films from './pages/Films'
import People from './pages/People'
import Starships from './pages/Starships'
import Species from './pages/Species'
import Planets from './pages/Planets'

import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {





  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/people" component={People} />
          <Route path="/species" component={Species} />
          <Route path="/starships" component={Starships} />
          <Route path="/planets" component={Planets} />
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
