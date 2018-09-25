import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddProcesForm from '../forms/AddProcesForm';
import { addProces } from '../../actions/procese';

class AddProcesPage extends React.Component{

  submit = data =>
    this.props.addProces(data).then(() => this.props.history.push("/procese"));

  render(){
    return(
      <div>
        <h1>Adauga PV</h1>
        <AddProcesForm submit={this.submit} addProces={addProces}/>
      </div>
    );
  }
}

AddProcesPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  addProces: PropTypes.func.isRequired
};

export default connect(null, {addProces})(AddProcesPage);