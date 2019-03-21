import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import  {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: 'Bienvenido',
      title2: 'Weather App'
    }
  }

  handleChange = () => {
    if(this.state.title1 === 'Bienvenido') {
      this.setState({title1: 'Weather App'});
      this.setState({title2: 'Bienvenido'});
    }
    else {
      this.setState({title1: 'Bienvenido'});
      this.setState({title2: 'Weather App'});
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title1}</h1>
        <h1>{this.state.title2}</h1>
        <Button variant="contained" color="primary" onClick={this.handleChange.bind(this)}>
          Intercalar
        </Button>
        <br/>
        <Link to="/Weather/March/20">Weather for March 20</Link>
        <br/>
        <Link to="/Weather/March/21">Weather for March 21</Link>
        <br/>
        <Link to="/Weather/March/22">Weather for March 22</Link>
        <br/>
        <Link to="/Weather/March/23">Weather for March 23</Link>
      </div>
    );
  }
}

export default Home;