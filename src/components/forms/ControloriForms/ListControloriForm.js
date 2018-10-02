import React from 'react';
import _ from 'lodash';
import {Table} from 'semantic-ui-react';
import axios from "axios";

class ListControloriForm extends React.Component{
  state = {
    loading: false,
    controlori: {},
    column: null,
    direction: null
  };

  handleSort = clickedColumn => () => {
    const { column, controlori, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        controlori: _.sortBy(controlori, [clickedColumn]),
        direction: 'ascending',
      });

      return
    }
    this.setState({
      controlori: controlori.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  };


  componentDidMount(){
    this.setState({loading: true});
    axios.get(`/api/controlori/search`)
      .then(res => this.setState({loading: false, controlori: res.data.controlori}))
  };

  render(){
    const {column, direction, controlori } = this.state;
    return(
    <Table celled sortable fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'marca' ? direction : null}
            onClick={this.handleSort('marca')}>Marca</Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'nume' ? direction : null}
            onClick={this.handleSort('nume')}>
            Nume
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_.map(controlori, ({_id, marca, nume }) => (
          <Table.Row key={_id}>
            <Table.Cell selectable> <a href="/controlori/edit" >{marca} </a> </Table.Cell>
            <Table.Cell selectable> <a href="/controlori/edit" >{nume} </a> </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    )
  }
}

export default ListControloriForm;