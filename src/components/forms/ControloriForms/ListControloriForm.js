import React from 'react';
import axios from "axios";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import ReactExport from "react-data-export";
import { Button, Icon } from "semantic-ui-react";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class ListControloriForm extends React.Component{
  state = {
    loading: false,
    controlori: [],
    column: null,
    direction: null
  };

  componentDidMount(){
    this.setState({loading: true});
    axios.get(`/api/controlori/search`)
      .then(res => this.setState({loading: false, controlori: res.data.controlori}));
  };

  render(){
    let { controlori, loading } = this.state;
    if(loading){
      return(<div align="center">Se incarca...</div>)
    }

    const columns = [{
      Header: 'Marca',
      accessor: 'marca'
    }, {
      Header: 'Nume',
      accessor: 'nume'
    }];

    return(
      <div style={{textAlign:"center"}}>
        <ExcelFile filename={`Controlori`} element={<Button icon labelPosition='right'><Icon name='print' size='big'/>Descarca PDF</Button>}>
          <ExcelSheet data={controlori} name="Controlori">
            <ExcelColumn label="Marca" value="marca"/>
            <ExcelColumn label="Nume" value="nume"/>
          </ExcelSheet>
        </ExcelFile>
        <ReactTable
          data={controlori}
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

export default ListControloriForm;