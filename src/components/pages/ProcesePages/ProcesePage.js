import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {allProceseSelector} from '../../../reducers/procese';
import AddProcesCtA from '../../ctas/ProceseCtas/AddProcesCtA';
import {edit} from '../../../actions/procese';
import EditProcesCtA from "../../ctas/ProceseCtas/EditProcesCtA";

class ProcesePage extends React.Component{
  state = {
    proces: null
  };

  render(){
    return(
      <div>
        <h1 align="center">Procese verbale</h1>
        <AddProcesCtA />
        <EditProcesCtA />
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