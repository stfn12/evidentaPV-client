import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';

class SearchProcesForm extends React.Component{
  state = {
    query: "",
    loading: false,
    options: [],
    procese: {}
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
    this.props.onProcesSelect(this.state.procese[data.value])
  };

  fetchOptions = () => {
    if(!this.state.query) return;
    this.setState({loading: true});
    axios.get(`/api/procese/search?q=${this.state.query}`)
      .then(res => res.data.procese)
      .then(procese => {
        const options = [];
        const proceseHash = {};
        procese.forEach(proces => {
          proceseHash[proces._id] = proces;
          options.push({
            key: proces._id,
            value: proces._id,
            text: `${proces.serie} ${proces.numar}`
          })
        });
        this.setState({loading: false, options, procese: proceseHash})
      });
  };

  render(){
    return(
     <Form>
       <Dropdown
         search
         fluid
         placeholder="Cauta PV dupa serie si numar. Ex: A 123"
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

SearchProcesForm.propTypes = {
  onProcesSelect: PropTypes.func.isRequired
};

export default SearchProcesForm;