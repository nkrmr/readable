import React from "react";
import { withStyles } from "material-ui/styles";
import {
  MuiThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button
} from "material-ui";
import { createMuiTheme } from "material-ui/styles";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import PostForm from "../../post/containers/PostForm";
import PostList from "../../post/containers/PostList";
import PostDetails from "../../post/containers/PostDetails";
import NotFound from "./NotFound.js";
import "../App.css";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1,
    textDecoration: "none"
  }
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4400"
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00"
    }
  }
});

const App = ({ classes }) => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
              to="/"
              component={props => <Link {...props} />}
            >
              Readable project
            </Typography>
            <Button
              color="inherit"
              to="/create"
              component={props => <Link {...props} />}
            >
              Add Post
            </Button>
          </Toolbar>
        </AppBar>
        <div className={styles.root}>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/category/:category" component={PostList} />
            <Route exact path="/create" component={PostForm} />
            <Route exact path="/update/:id" component={PostForm} />
            <Route exact path="/:category/:id" component={PostDetails} />
            <Route
              exact
              path="/:category/:id/comment/:commentId"
              component={PostDetails}
            />
            <Route
              exact
              path="/redirect"
              render={({ match }) => <Redirect to={`/`} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default withStyles(styles)(App);
