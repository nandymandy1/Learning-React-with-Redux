import React, { Component } from 'react';
import './App.css';

// Provider for redux
import { Provider } from 'react-redux';


import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './react-redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;