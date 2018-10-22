import React from 'react';
import _ from 'lodash';
import {Table} from 'semantic-ui-react';
import axios from "axios";
import moment from "moment";
import {Link} from 'react-router-dom';

class ListProceseForm extends React.Component{
  state = {
    loading: true,
    procese: {},
    column: null,
    direction: null,
    startDate: null,
    endDate: null,
    selected: null
  };

  loadProcese(){
    if(this.props.startDate === null || this.props.endDate === null)
      return;
    axios.get(`/api/procese/searchDate?from=${this.props.startDate}&to=${this.props.endDate}`)
      .then(res => this.setState({loading: false, procese: res.data.procese}))
  };

  render(){
    const { procese, loading, selected } = this.state;
    this.loadProcese();
    return(
      <div>
      <Table size={'small'} selectable fixed loading={loading}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={'one'}>Serie</Table.HeaderCell>
            <Table.HeaderCell width={'one'}>Numar</Table.HeaderCell>
            <Table.HeaderCell>Data intocmire</Table.HeaderCell>
            <Table.HeaderCell width={'one'}>Marca</Table.HeaderCell>
            <Table.HeaderCell>Contravenient</Table.HeaderCell>
            <Table.HeaderCell width={'two'}>CNP</Table.HeaderCell>
            <Table.HeaderCell>Adresa</Table.HeaderCell>
            <Table.HeaderCell>Mod solutionare</Table.HeaderCell>
            <Table.HeaderCell width={'one'}>Suma</Table.HeaderCell>
            <Table.HeaderCell>Mod intocmire</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(procese, ({_id, serie, numar, data_intocmire, marca, contravenient, cnp, adresa, localitate, suma, mod_intocmire }) => (
            <Table.Row selectable key={_id}>
              <Table.Cell> {serie}  </Table.Cell>
              <Table.Cell> {numar}  </Table.Cell>
              <Table.Cell> {moment(data_intocmire).format('DD-MM-YYYY')}  </Table.Cell>
              <Table.Cell> {marca}  </Table.Cell>
              <Table.Cell> {contravenient}  </Table.Cell>
              <Table.Cell> {cnp}  </Table.Cell>
              <Table.Cell> {adresa}  </Table.Cell>
              <Table.Cell> {localitate}  </Table.Cell>
              <Table.Cell> {suma}  </Table.Cell>
              <Table.Cell> {mod_intocmire}  </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    )
  }
}

export default ListProceseForm;