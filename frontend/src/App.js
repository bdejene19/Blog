import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import LoginGateway  from './pages/LoginGateway';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginGateway}></Route>
          <Route path='/home' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
