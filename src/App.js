import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from './components/Home';
import Category from './components/Category';


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route exact path='/' component={Category}/> */}

        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
