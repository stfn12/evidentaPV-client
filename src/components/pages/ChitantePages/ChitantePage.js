import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {edit} from '../../../actions/chitante';
import AddChitantaCtA from "../../ctas/ChitanteCtas/AddChitantaCtA";
import EditChitantaCtA from "../../ctas/ChitanteCtas/EditChitantaCtA";

class ChitantePage extends React.Component{
  state = {
    chitanta: null
  };

  render(){
    return(
      <div>
        <h1 align="center">Chitante</h1>
        <AddChitantaCtA />
        <EditChitantaCtA />
      </div>
    );
  }
}

ChitantePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, {edit})(ChitantePage);