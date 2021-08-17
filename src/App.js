import { createGlobalStyle } from 'styled-components';
import './font.css';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

const Global = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background: #121212;
    min-height: 100vh;
  }
`;

function App() {

    const registered = localStorage.getItem('registered');
    return (
        <Router>
            <Global />
            <Switch>
                <Route exact path="/">
                    {registered ? (
                        <Redirect to="/sign-in" />
                    ) : (
                        <Redirect to="/sign-up" />
                    )}
                </Route>
                <Route exact path="/home" component={Home} />
                <Route
                    path="/sign-in"
                    component={SignIn}
                />
                <Route
                    path="/sign-up"
                    component={SignUp}
                />
            </Switch>
        </Router>
    )
}

export default App;
