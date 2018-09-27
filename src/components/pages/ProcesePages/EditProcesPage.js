import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {allProceseSelector} from '../../../reducers/procese';
import SearchProcesForm from '../../forms/ProceseForms/SearchProcesForm';
import EditProcesForm from '../../forms/ProceseForms/EditProcesForm';
import {Segment} from 'semantic-ui-react';
import {edit} from '../../../actions/procese';

class EditProcesPage extends React.Component{
  state = {
    proces: null
  };

  onProcesSelect = proces => this.setState({proces});

  editProces = data =>
    this.props.edit(data).then(() => this.props.history.push('/procese'));

  render(){
    return(
      <div>
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

EditProcesPage.propTypes = {
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

export default connect(mapStateToProps, {edit})(EditProcesPage);