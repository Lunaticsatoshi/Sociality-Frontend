import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/index.scss";

//Material UI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createTheme from "@material-ui/core/styles/createMuiTheme";

//Components
import Navbar from "./components/navbar/navbar";
import HiddenNavBar from "./components/navbar/hidden_navbar";
import Appbar from "./components/appbar/appbar";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#242526",
      dark: "#008394",
      contratText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Appbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
