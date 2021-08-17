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
                <Route exact path="/cursor-react-styled-components">
                    {registered ? (
                        <Redirect to="/cursor-react-styled-components/sign-in" />
                    ) : (
                        <Redirect to="/cursor-react-styled-components/sign-up" />
                    )}
                </Route>
                <Route path="/cursor-react-styled-components/home" component={Home} />
                <Route
                    path="/cursor-react-styled-components/sign-in"
                    component={SignIn}
                />
                <Route
                    path="/cursor-react-styled-components/sign-up"
                    component={SignUp}
                />
            </Switch>
        </Router>
    )
}

export default App;
