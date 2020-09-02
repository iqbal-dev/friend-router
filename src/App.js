import React from 'react';
import './App.css';
import Home from './componenets/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './componenets/NoMatch/NoMatch';
import FriendDetail from './componenets/FriendDetail/FriendDetail';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetail></FriendDetail>
          </Route>
          <Route path = "*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
