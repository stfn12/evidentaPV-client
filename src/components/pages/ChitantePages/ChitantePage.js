import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChitantaCtA from "../../ctas/ChitantaCtA";
import ListChitanteForm from "../../forms/ChitanteForms/ListChitanteForm";
import { DateRange } from "react-date-range";
import moment from "moment";
import { Button, Divider} from "semantic-ui-react";

class ChitantePage extends React.Component{
  state = {
    chitanta: null,
    startDate: null,
    endDate: null
  };

  handleSelect = range => {
    this.setState({startDate: moment(range.startDate._d).format('YYYY-MM-DD'),
      endDate: moment(range.endDate._d).format('YYYY-MM-DD')});
  };

  onClick = () =>{
    this.setState({startDate: null, endDate: null});
  };

  render(){
    return(
      <div>
        <h1 align="center" style={{padding: '15px'}}>Chitante</h1>
        <ChitantaCtA />
        <div align="center">
          <DateRange startDate={null} endDate={null} onChange={this.handleSelect}/>
          <Button onClick={this.onClick}>Reseteaza data</Button>
        </div>
        <Divider/>
        <div>
          <ListChitanteForm endDate={this.state.endDate} startDate={this.state.startDate}/>
        </div>
      </div>
    );
  }
}

ChitantePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps)(ChitantePage);