import React from 'react';
import axios from "axios";
import moment from "moment";
import ReactTable from "react-table";
import { Button, Icon } from "semantic-ui-react";
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class ListChitanteForm extends React.Component{
  state = {
    loading: true,
    chitante: [],
    column: null,
    direction: null,
    startDate: null,
    endDate: null
  };

  loadChitante(){
    if((this.props.startDate === null && this.props.endDate === null) || (this.props.startDate === undefined && this.props.endDate === undefined))
      axios.get(`/api/chitante/search`)
        .then(res => this.setState({loading: false, chitante: res.data.chitante}));
    else axios.get(`/api/chitante/searchDate?from=${this.props.startDate}&to=${this.props.endDate}`)
      .then(res => this.setState({loading: false, chitante: res.data.chitante}))
  };

  render(){
    const { chitante, loading } = this.state;
    this.loadChitante();
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
        <ExcelFile filename={`Chitante ${this.props.startDate !== null ? moment(this.props.startDate).format("DD-MM-YYYY") :''} __ ${this.props.endDate !== null ? moment(this.props.endDate).format("DD-MM-YYYY") :''}`} element={<Button icon labelPosition='right'><Icon name='print' size='big'/>Descarca PDF</Button>}>
          <ExcelSheet data={chitante} name="Chitante">
            <ExcelColumn label="Contravenient" value="contravenient"/>
            <ExcelColumn label="CNP" value="cnp"/>
            <ExcelColumn label="Numar" value="numar"/>
            <ExcelColumn label="Data" value="data"/>
            <ExcelColumn label="Suma" value="suma"/>
          </ExcelSheet>
        </ExcelFile>
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