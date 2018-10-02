import React from 'react';
import _ from 'lodash';
import {Table} from 'semantic-ui-react';
import axios from "axios";
import moment from "moment";

class ListChitanteForm extends React.Component{
  state = {
    loading: false,
    chitante: {},
    column: null,
    direction: null
  };

  handleSort = clickedColumn => () => {
    const { column, chitante, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        chitante: _.sortBy(chitante, [clickedColumn]),
        direction: 'ascending',
      });

      return
    }
    this.setState({
      chitante: chitante.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  };

  componentDidMount(){
    this.setState({loading: true});
    axios.get(`/api/chitante/search`)
      .then(res => this.setState({loading: false, chitante: res.data.chitante}))
  };

  render(){
    const {column, direction, chitante } = this.state;
    return(
      <Table selectable celled sortable fixed >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'contravenient' ? direction : null}
              onClick={this.handleSort('contravenient')}>
              Contravenient
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'cnp' ? direction : null}
              onClick={this.handleSort('cnp')}>
              CNP
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'numar' ? direction : null}
              onClick={this.handleSort('numar')}>
              Numar
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'data' ? direction : null}
              onClick={this.handleSort('data')}>
              Data
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'suma' ? direction : null}
              onClick={this.handleSort('suma')}>
              Suma
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(chitante, ({_id, contravenient, cnp, numar, data, suma }) => (
            <Table.Row key={_id}>
              <Table.Cell selectable> <a href="/chitante/edit" >{contravenient} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/chitante/edit" >{cnp} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/chitante/edit" >{numar} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/chitante/edit" >{moment(data).format('DD-MM-YYYY')} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/chitante/edit" >{suma} </a> </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default ListChitanteForm;