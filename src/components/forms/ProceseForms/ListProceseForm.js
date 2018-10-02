import React from 'react';
import _ from 'lodash';
import {Table} from 'semantic-ui-react';
import axios from "axios";
import moment from "moment";

class ListProceseForm extends React.Component{
  state = {
    loading: false,
    procese: {},
    column: null,
    direction: null
  };

  handleSort = clickedColumn => () => {
    const { column, procese, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        procese: _.sortBy(procese, [clickedColumn]),
        direction: 'ascending',
      });

      return
    }
    this.setState({
      procese: procese.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  };


  componentDidMount(){
    this.setState({loading: true});
    axios.get(`/api/procese/search`)
      .then(res => this.setState({loading: false, procese: res.data.procese}))
  };

  render(){
    const {column, direction, procese } = this.state;
    return(
      <Table selectable collapsing celled sortable fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'serie' ? direction : null}
              onClick={this.handleSort('serie')}>
              Serie
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'numar' ? direction : null}
              onClick={this.handleSort('numar')}>
              Numar
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'data' ? direction : null}
              onClick={this.handleSort('data')}>
              Data intocmire
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'marca' ? direction : null}
              onClick={this.handleSort('marca')}>
              Marca
            </Table.HeaderCell>
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
              sorted={column === 'adresa' ? direction : null}
              onClick={this.handleSort('adresa')}>
              Adresa
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'localitate' ? direction : null}
              onClick={this.handleSort('localitate')}>
              Localitate
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'suma' ? direction : null}
              onClick={this.handleSort('suma')}>
              Suma
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'mod' ? direction : null}
              onClick={this.handleSort('mod')}>
              Mod intocmire
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(procese, ({_id, serie, numar, data_intocmire, marca, contravenient, cnp, adresa, localitate, suma, mod_intocmire }) => (
            <Table.Row key={_id}>
              <Table.Cell selectable> <a href="/procese/edit" >{serie} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{numar} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{moment(data_intocmire).format('DD-MM-YYYY')} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{marca} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{contravenient} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{cnp} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{adresa} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{localitate} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{suma} </a> </Table.Cell>
              <Table.Cell selectable> <a href="/procese/edit" >{mod_intocmire} </a> </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default ListProceseForm;