import React, { Component } from 'react';
import PostForm from './components/post/PostForm';
import PostList from './components/post/PostList';
import { MuiThemeProvider, AppBar, FlatButton } from 'material-ui';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <AppBar
            title="Readable"
            iconElementRight={
              <FlatButton
                containerElement={Link}
                to="create"
                label="Add post"
              />
            }
          />
          <Route exact path="/" component={PostList} />
          <Route path="/create" component={PostForm} />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
