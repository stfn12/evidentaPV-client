import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {edit} from '../../../actions/controlori';
import AddControlorCtA from "../../ctas/ControloriCtas/AddControlorCtA";
import EditControlorCtA from "../../ctas/ControloriCtas/EditControlorCtA";

class ControloriPage extends React.Component{
  state = {
    controlor: null
  };

  render(){
    return(
      <div>
        <h1 align="center">Controlori</h1>
        <AddControlorCtA />
        <EditControlorCtA />
      </div>
    );
  }
}

ControloriPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, {edit})(ControloriPage);