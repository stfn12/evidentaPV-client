import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';

class SearchControlorForm extends React.Component{
  state = {
    query: "",
    loading: false,
    options: [],
    controlori: {}
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
    this.props.onControlorSelect(this.state.controlori[data.value])
  };

  fetchOptions = () => {
    if(!this.state.query) return;
    this.setState({loading: true});
    axios.get(`/api/controlori/search?q=${this.state.query}`)
      .then(res => res.data.controlori)
      .then(controlori => {
        const options = [];
        const controloriHash = {};
        controlori.forEach(controlor => {
          controloriHash[controlor._id] = controlor;
          options.push({
            key: controlor._id,
            value: controlor._id,
            text: `${controlor.marca} ${controlor.nume}`
          })
        });
        this.setState({loading: false, options, controlori: controloriHash})
      });
  };

  render(){
    return(
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Cauta controlor dupa marca/nume. Ex: 1 Vasile"
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

SearchControlorForm.propTypes = {
  onControlorSelect: PropTypes.func.isRequired
};

export default SearchControlorForm;