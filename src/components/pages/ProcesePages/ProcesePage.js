import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRange } from 'react-date-range';
import {Divider} from 'semantic-ui-react'
import {allProceseSelector} from '../../../reducers/procese';
import ProcesCtA from '../../ctas/ProcesCtA';
import {edit} from '../../../actions/procese';
import ListProceseForm from "../../forms/ProceseForms/ListProceseForm";
import moment from "moment";

class ProcesePage extends React.Component{
  state = {
    proces: null,
    loading: false,
    errors: {},
    startDate: null,
    endDate: null
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value}
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      this.setState({loading: true});
      this.props
        .submit(this.state.data)
        .catch(err=> this.setState({errors: err.response.data.errors, loading: false}))
    }
  };

  validate = data => {
    const errors = {};
    if(!data.startDate) errors.startDate = "Introduceti data";
    if(!data.endDate) errors.endDate = "Introduceti data";
    return errors;
  };

  handleSelect = range => {
    this.setState({startDate: moment(range.startDate._d).format('YYYY-MM-DD'),
      endDate: moment(range.endDate._d).format('YYYY-MM-DD')});
  };

  render(){
    return(
      <div>
        <h1 align="center">Procese verbale</h1>
        <ProcesCtA />
        <div align="center">
          <DateRange startDate={null} endDate={null} onChange={this.handleSelect}/>
          {/*<Button onClick={this.onSubmit} primary size="medium">Afiseaza</Button>*/}
        </div>
        <Divider/>
        <div>
        <ListProceseForm endDate={this.state.endDate} startDate={this.state.startDate}/>
        </div>
      </div>
    );
  }
}

ProcesePage.propTypes = {
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

export default connect(mapStateToProps, {edit})(ProcesePage);