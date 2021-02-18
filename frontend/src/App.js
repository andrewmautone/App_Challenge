import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Styles = styled.div`
  flex:1;
  display:flex;
  width:100%;
  height:100%;
 background-color:#131C25;


  
`;
function App() {
  return (

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

        </Switch>
      </Styles>

    </Router>
  );
}

export default App;
