import React, { Component } from 'react';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    items: state.items
});
  
const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    generate = () => {

    }

    render() {
      return (
          <div >
              {this.generate()}
          </div>
      );
    }
  }
  
  export default Weather;