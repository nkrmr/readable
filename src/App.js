import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  MuiThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from 'material-ui';
import { createMuiTheme } from 'material-ui/styles';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import PostForm from './modules/post/containers/PostForm';
import PostList from './modules/post/containers/PostList';
import PostDetails from './modules/post/containers/PostDetails';
import './App.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    textDecoration: 'none',
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
});

const App = props => {
  const { classes } = props;
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
              component={props => <Link {...props} />}>
              Readable project
            </Typography>
            <Button
              color="inherit"
              to="/create"
              component={props => <Link {...props} />}>
              Add Post
            </Button>
          </Toolbar>
        </AppBar>
        <div className={styles.root}>
          <Route exact path="/" component={PostList} />
          <Route path="/post/:category/:id" component={PostDetails} />
          <Route path="/category/:category" component={PostList} />
          <Route path="/create" component={PostForm} />
          <Route exact path="/update/:id" component={PostForm} />
          <Route
            path="/redirect"
            render={({ match }) => <Redirect to={`/`} />}
          />
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default withStyles(styles)(App);
