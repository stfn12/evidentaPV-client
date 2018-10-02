import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ControlorCtA from "../../ctas/ControlorCtA";
import ListControloriForm from "../../forms/ControloriForms/ListControloriForm";

class ControloriPage extends React.Component{
  state = {
    controlor: null
  };

  render(){
    return(
      <div>
        <h1 align="center">Controlori</h1>
        <ControlorCtA />
        <ListControloriForm/>
      </div>
    );
  }
}

ControloriPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps)(ControloriPage);