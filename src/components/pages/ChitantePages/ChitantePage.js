import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChitantaCtA from "../../ctas/ChitantaCtA";
import ListChitanteForm from "../../forms/ChitanteForms/ListChitanteForm";

class ChitantePage extends React.Component{
  state = {
    chitanta: null
  };

  render(){
    return(
      <div>
        <h1 align="center">Chitante</h1>
        <ChitantaCtA />
        <ListChitanteForm/>
      </div>
    );
  }
}

ChitantePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps)(ChitantePage);