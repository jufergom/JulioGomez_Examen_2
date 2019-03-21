import React, { Component } from 'react';
import './App.css';
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import configureStore from "./modules/store";
import Home from './components/Home';
import Weather from './components/Weather';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/weather/:month/:day" component={Weather}/>
    </Switch>
  </Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
