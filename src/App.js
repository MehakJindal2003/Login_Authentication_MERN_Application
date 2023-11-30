import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Update from './components/update/Update';
import Frontpage from './components/frontpage/Frontpage';
import UpdateUsername from './components/updateUsername/UpdateUsername';


function App() {

  const [ user, setLoginUser]=useState(()=>{
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : {};
  })

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Frontpage/>
          </Route>
          <Route exact path='/homepage'>
            <Homepage user={user} setLoginUser={setLoginUser}/>
          </Route>
          {/* <Route exact path="/homepage">
            {
              user && user._id
              ?
              <Homepage user={user} setLoginUser={setLoginUser}/>
              :
              <Login setLoginUser={setLoginUser}/>
            }
          </Route> */}
          <Route default exact path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path='/update-password'>
            <Update user={user}/>
          </Route>
          <Route exact path='/update-username'>
            <UpdateUsername user={user} setLoginUser={setLoginUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;