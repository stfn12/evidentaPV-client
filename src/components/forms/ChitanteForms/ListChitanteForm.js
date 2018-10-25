import React from 'react';
import axios from "axios";
import moment from "moment";
import ReactTable from "react-table";

class ListChitanteForm extends React.Component{
  state = {
    loading: false,
    chitante: [],
    column: null,
    direction: null
  };

  componentDidMount(){
    this.setState({loading: true});
    axios.get(`/api/chitante/search`)
      .then(res => this.setState({loading: false, chitante: res.data.chitante}))
  };

  render(){
    const { chitante, loading } = this.state;
    if(loading){
      return(<div align="center">Se incarca...</div>)
    }
    const columns = [{
      Header: 'Contravenient',
      accessor: 'contravenient'
    }, {
      Header: 'CNP',
      accessor: 'cnp'
    }, {
        Header: 'Numar',
        accessor: 'numar'
      }, {
      id:"data",
      Header: 'Data',
      accessor: data=>{
        return moment(data.data).format("DD/MM/YYYY")}
        }, {
        Header: 'Suma',
        accessor: 'suma'
      }];
    return(
      <div style={{textAlign:"center"}}>
        <ReactTable
          data={chitante}
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

export default ListChitanteForm;