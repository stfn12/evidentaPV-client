import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddChitantaForm from '../../forms/ChitanteForms/AddChitantaForm';
import { addChitanta } from '../../../actions/chitante';

class AddChitantaPage extends React.Component{

  submit = data =>
    this.props.addChitanta(data).then(() => this.props.history.push("/chitante"));

  render(){
    return(
      <div>
        <h1 style={{padding: '15px'}}>Adauga chitanta</h1>
        <AddChitantaForm submit={this.submit} addChitanta={addChitanta}/>
      </div>
    );
  }
}

AddChitantaPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  addChitanta: PropTypes.func.isRequired
};

export default connect(null, {addChitanta})(AddChitantaPage);