import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRange } from 'react-date-range';
import {Divider, Segment, Button} from 'semantic-ui-react';
import moment from "moment";
import ListProceseforControlorForm from "../../forms/ControloriForms/ListProceseforControlorForm";
import SearchControlorForm from "../../forms/ControloriForms/SearchControlorForm";

class ReportsControlorPage extends React.Component{
  state = {
    controlor: null,
    loading: false,
    startDate: null,
    endDate: null,
    data: {
      _id: null,
      marca: null,
      nume: null
    }
  };

  handleSelect = range => {
    this.setState({startDate: moment(range.startDate._d).format('YYYY-MM-DD'),
      endDate: moment(range.endDate._d).format('YYYY-MM-DD')});
  };

  onControlorSelect = controlor => this.setState({data: controlor});

  onClick = () =>{
    this.setState({startDate: null, endDate: null});
  };

  render(){
    return(
      <div>
        <h1 align="center" style={{padding: '15px'}}>Rapoarte controlori</h1>
        <div align="center">
          <Segment>
          <SearchControlorForm onControlorSelect={ this.onControlorSelect } />
          </Segment>
          <Segment>
          <DateRange startDate={null} endDate={null} onChange={this.handleSelect}/>
          <Button onClick={this.onClick}>Reseteaza data</Button>
          </Segment>
        </div>
        <Divider/>
        <div>
          <ListProceseforControlorForm endDate={this.state.endDate} startDate={this.state.startDate} controlor={this.state.data}/>
        </div>
      </div>
    );
  }
}

ReportsControlorPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps)(ReportsControlorPage);