import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addControlor } from '../../../actions/controlori';
import AddControlorForm from "../../forms/ControloriForms/AddControlorForm";

class AddControlorPage extends React.Component{

  submit = data =>
    this.props.addControlor(data).then(() => this.props.history.push("/controlori"));

  render(){
    return(
      <div>
        <h1>Adauga controlor</h1>
        <AddControlorForm submit={this.submit} addControlor={addControlor()}/>
      </div>
    );
  }
}

AddControlorPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  addControlor: PropTypes.func.isRequired
};

export default connect(null, {addControlor})(AddControlorPage);