import React from 'react';
import _ from 'lodash';
import {Table} from 'semantic-ui-react';
import axios from "axios";
import moment from "moment";
import ReactTable from "react-table";

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
    //this.setState({loading: true});
    if(this.props.startDate === null || this.props.endDate === null)
      return;
    axios.get(`/api/procese/searchDate?from=${this.props.startDate}&to=${this.props.endDate}`)
      .then(res => this.setState({loading: false, procese: res.data.procese}))
  };

  render(){
    const { procese, loading} = this.state;
    this.loadProcese();
    const columns = [{
      Header: 'Serie',
      accessor: 'serie'
    }, {
      Header: 'Numar',
      accessor: 'numar'
    }, {
      Header: 'Data',
      accessor: 'data_intocmire'
    }, {
      Header: 'Marca',
      accessor: 'marca'
    }, {
      Header: 'Contravenient',
      accessor: 'contravenient'
    },{
      Header: 'CNP',
      accessor: 'cnp'
    }, {
      Header: 'Adresa',
      accessor: 'adresa'
    }, {
      Header: 'Localitate',
      accessor: 'localitate'
    }, {
      Header: 'Suma',
      accessor: 'suma'
    }, {
      Header: 'Mod intocmire',
      accessor: 'mod_intocmire'
    }];
    if(loading){
      return(<div></div>)
    }
    return(
      <div style={{textAlign:"center"}}>
        <ReactTable
          data={procese}
          columns={columns}
          defaultPageSize={10}
          previousText="Inapoi"
          nextText="Inainte"
          pageText= 'Pagina'
          ofText= 'din'
          rowsText= 'randuri'
        />
      </div>
    )
  }
}

export default ListProceseForm;