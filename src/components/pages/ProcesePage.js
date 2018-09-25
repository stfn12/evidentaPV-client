import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {allProceseSelector} from '../../reducers/procese';
import AddProcesCtA from '../ctas/AddProcesCtA';
import SearchProcesForm from '../forms/SearchProcesForm';
import EditProcesForm from '../forms/EditProcesForm';
import {Segment} from 'semantic-ui-react';

class ProcesePage extends React.Component{
  state = {
    proces: null
  };

  onProcesSelect = proces => this.setState({proces});

  editProces = () => console.log('hi');

  render(){
    return(
      <div>
        <h1 align="center">Procese verbale</h1>
        <AddProcesCtA />
        <Segment>
          <h1>Cauta PV</h1>
          <SearchProcesForm onProcesSelect = { this.onProcesSelect } />
          {this.state.proces &&
            <EditProcesForm submit={this.editProces} proces={this.state.proces}/>}
        </Segment>
      </div>
    );
  }
}

ProcesePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  procese: PropTypes.arrayOf(PropTypes.shape({
    contravenient: PropTypes.string.isRequired
  }).isRequired).isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    procese: allProceseSelector(state)
  }
}

export default connect(mapStateToProps)(ProcesePage);