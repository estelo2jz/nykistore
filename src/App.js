import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    )
  }
}

export default App;
