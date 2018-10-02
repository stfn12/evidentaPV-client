import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {allProceseSelector} from '../../../reducers/procese';
import ProcesCtA from '../../ctas/ProcesCtA';
import {edit} from '../../../actions/procese';
import ListProceseForm from "../../forms/ProceseForms/ListProceseForm";

class ProcesePage extends React.Component{
  state = {
    proces: null
  };

  render(){
    return(
      <div>
        <h1 align="center">Procese verbale</h1>
        <ProcesCtA />
        <ListProceseForm/>
      </div>
    );
  }
}

ProcesePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  procese: PropTypes.arrayOf(PropTypes.shape({
    contravenient: PropTypes.string.isRequired
  }).isRequired).isRequired,
  edit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    procese: allProceseSelector(state)
  }
}

export default connect(mapStateToProps, {edit})(ProcesePage);