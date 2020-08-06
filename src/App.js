import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./styles/index.scss";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//Material UI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createTheme from "@material-ui/core/styles/createMuiTheme";

//Components
import Navbar from "./components/navbar/navbar";
import HiddenNavBar from "./components/navbar/hidden_navbar";
import Appbar from "./components/appbar/appbar";
import AuthRoute from "./util/AuthRoute";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import themeFile from "./util/theme";

const theme = createTheme(themeFile);

const token = localStorage.FBIdToken;
let authenticated;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <Appbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute
                  exact
                  path="/login"
                  component={login}
                  authenticated={authenticated}
                />
                <AuthRoute
                  exact
                  path="/signup"
                  component={signup}
                  authenticated={authenticated}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
