import Login from './screens/Login';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Register from './screens/Register';
import Profile from './screens/Profile';
import styled from 'styled-components';
import api from './services/api';
import { MainContext, Context } from '../src/context/mainContext';
import { useEffect, useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
const Styles = styled.div`
  flex:1;
  display:flex;
  width:100%;
  height:100%;
 background-color:#131C25;
.loading{
  width:100%;
  align-items:center;
  justify-content:center;
}

  
`;
function App() {
  const context = useContext(Context)
  const [load, setLoad] = useState(false);
  useEffect(() => {

  
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.clear()
      setLoad(true)
    } else {


      getUserData(token)
    }
    getConnections()

  }, [])

  const getConnections = async () => {
    const connections = (await api.get('/connectionTypes')).data
   
    context.setConnectionTypes(connections)
    setLoad(true)
  }
  const getUserData = async (token) => {
    const user = (await api.get('/users')).data

    context.setUser(user)
    setLoad(true)
  }

  return (
    load ?
      <Router>
        <Styles>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/profile/:username'>
              <Profile />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route path='/profile'>
              <Redirect to={context.user ? `/profile/${context.user.username}` : `/login`} />
            </Route>

          </Switch>
        </Styles>

      </Router>
      : <Styles/>

  );
}

export default App;
