import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';

class SearchChitantaForm extends React.Component{
  state = {
    query: "",
    loading: false,
    options: [],
    chitante: {}
  };

  onSearchChange = (e, data) =>{
    clearTimeout(this.timer);
    this.setState({
      query: data.searchQuery
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  onChange = (e, data) => {
    this.setState({ query: data.value });
    this.props.onChitantaSelect(this.state.chitante[data.value])
  };

  fetchOptions = () => {
    if(!this.state.query) return;
    this.setState({loading: true});
    axios.get(`/api/chitante/search?q=${this.state.query}`)
      .then(res => res.data.chitante)
      .then(chitante => {
        const options = [];
        const chitanteHash = {};
        chitante.forEach(chitanta => {
          chitanteHash[chitanta._id] = chitanta;
          options.push({
            key: chitanta._id,
            value: chitanta._id,
            text: `${chitanta.numar} ${chitanta.contravenient}`
          })
        });
        this.setState({loading: false, options, chitante: chitanteHash})
      });
  };

  render(){
    return(
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Cauta chitanta dupa contravenient/numar. Ex: 222 Vasile"
          value = {this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

SearchChitantaForm.propTypes = {
  onChitantaSelect: PropTypes.func.isRequired
};

export default SearchChitantaForm;