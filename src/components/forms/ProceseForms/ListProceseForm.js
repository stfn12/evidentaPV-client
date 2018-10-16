import React from 'react';
import _ from 'lodash';
import {Table} from 'semantic-ui-react';
import axios from "axios";
import moment from "moment";
import {Link} from 'react-router-dom'

class ListProceseForm extends React.Component{
  state = {
    loading: true,
    procese: {},
    column: null,
    direction: null,
    startDate: null,  
    endDate: null
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

  loadProcese(){
    axios.get(`/api/procese/searchDate?from=${this.props.startDate}&to=${this.props.endDate}`)
      .then(res => this.setState({loading: false, procese: res.data.procese}))
  };

  render(){
    const {column, direction, procese } = this.state;
    this.loadProcese();
    return(
      <div>
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
            <Table.HeaderCell>Data intocmire</Table.HeaderCell>
            <Table.HeaderCell>Marca</Table.HeaderCell>
            <Table.HeaderCell>Contravenient</Table.HeaderCell>
            <Table.HeaderCell>CNP</Table.HeaderCell>
            <Table.HeaderCell>Adresa</Table.HeaderCell>
            <Table.HeaderCell>Mod solutionare</Table.HeaderCell>
            <Table.HeaderCell>Suma</Table.HeaderCell>
            <Table.HeaderCell>Mod intocmire</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(procese, ({_id, serie, numar, data_intocmire, marca, contravenient, cnp, adresa, localitate, suma, mod_intocmire }) => (
            <Table.Row key={_id}>
              <Table.Cell selectable> <Link to="/procese/edit" >{serie} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{numar} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{moment(data_intocmire).format('DD-MM-YYYY')} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{marca} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{contravenient} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{cnp} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{adresa} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{localitate} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{suma} </Link> </Table.Cell>
              <Table.Cell selectable> <Link to="/procese/edit" >{mod_intocmire} </Link> </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    )
  }
}

export default ListProceseForm;