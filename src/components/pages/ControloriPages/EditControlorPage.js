import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Segment} from 'semantic-ui-react';
import {edit} from '../../../actions/controlori';
import SearchControlorForm from "../../forms/ControloriForms/SearchControlorForm";
import EditControlorForm from "../../forms/ControloriForms/EditControlorForm";

class EditControlorPage extends React.Component{
  state = {
    controlor: null
  };

  onControlorSelect = controlor => this.setState({controlor});

  editControlor = data =>
    this.props.edit(data).then(() => this.props.history.push('/controlori'));

  render(){
    return(
      <div>
        <Segment>
          <h1 style={{padding: '15px'}}>Cauta controlor</h1>
          <SearchControlorForm onControlorSelect={ this.onControlorSelect } />
          {this.state.controlor &&
          <EditControlorForm submit={this.editControlor} controlor={this.state.controlor}/>}
        </Segment>
      </div>
    );
  }
}

EditControlorPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, {edit})(EditControlorPage);