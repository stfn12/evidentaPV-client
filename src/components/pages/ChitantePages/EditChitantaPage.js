import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchChitantaForm from '../../forms/ChitanteForms/SearchChitantaForm';
import EditChitantaForm from '../../forms/ChitanteForms/EditChitantaForm';
import {Segment} from 'semantic-ui-react';
import {edit} from '../../../actions/chitante';

class EditChitantaPage extends React.Component{
  state = {
    chitanta: null
  };

  onChitantaSelect = chitanta => this.setState({chitanta});

  editChitanta = data =>
    this.props.edit(data).then(() => this.props.history.push('/chitante'));

  render(){
    return(
      <div>
        <Segment>
          <h1>Cauta chitanta</h1>
          <SearchChitantaForm onChitantaSelect={ this.onChitantaSelect } />
          {this.state.chitanta &&
          <EditChitantaForm submit={this.editChitanta} chitanta={this.state.chitanta}/>}
        </Segment>
      </div>
    );
  }
}

EditChitantaPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, {edit})(EditChitantaPage);