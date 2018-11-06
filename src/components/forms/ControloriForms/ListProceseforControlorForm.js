import React from 'react';
import axios from "axios";
import moment from "moment";
import ReactTable from "react-table";
import ReactExport from "react-data-export";
import { Button, Icon } from "semantic-ui-react";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class ListProceseforControlorForm extends React.Component{
  state = {
    loading: true,
    procese: {},
    column: null,
    direction: null,
    startDate: null,
    endDate: null,
    selected: null,
    controlor : null
  };

  componentWillReceiveProps(nextProps){
    this.setState({startDate: nextProps.startDate, endDate: nextProps.endDate, controlor: nextProps.controlor});
    if(nextProps.controlor.marca === null)
      return;
    else if(nextProps.startDate === null || nextProps.endDate === null)
      axios.get(`/api/procese/search?controlor=${nextProps.controlor.marca}`)
        .then(res => this.setState({loading: false, procese: res.data.procese}));
    else
      axios.get(`/api/procese/searchDate?controlor=${nextProps.controlor.marca}&from=${nextProps.startDate}&to=${nextProps.endDate}`)
        .then(res => this.setState({loading: false, procese: res.data.procese}))
  };

  render(){
    const { procese, loading } = this.state;
    const columns = [{
      Header: 'Serie',
      accessor: 'serie',
      maxWidth: 45
    }, {
      Header: 'Numar',
      accessor: 'numar',
      maxWidth: 80
    }, {
      id:"data_intocmire",
      Header: 'Data',
      accessor: data=>{
        return moment(data.data_intocmire).format("DD/MM/YYYY")
      },
      maxWidth: 90
    }, {
      Header: 'Marca',
      accessor: 'marca',
      maxWidth: 55
    }, {
      Header: 'Contravenient',
      accessor: 'contravenient',
      minWidth: 150,
      maxWidth: 200
    },{
      Header: 'CNP',
      accessor: 'cnp',
      minWidth: 120,
      maxWidth: 140
    }, {
      Header: 'Adresa',
      accessor: 'adresa'
    }, {
      Header: 'Localitate',
      accessor: 'localitate',
      maxWidth: 90
    }, {
      Header: 'Suma',
      accessor: 'suma',
      maxWidth: 60
    }, {
      Header: 'Mod intocmire',
      accessor: 'mod_intocmire',
      maxWidth: 80
    }];
    if(loading){
      return(<div></div>)
    }
    return(
      <div style={{textAlign:"center"}}>
        <ExcelFile filename={`Procese marca ${this.props.controlor.marca} ${this.props.startDate !== null ? moment(this.props.startDate).format("DD-MM-YYYY") :''} __ ${this.props.endDate !== null ? moment(this.props.endDate).format("DD-MM-YYYY") :''}`} element={<Button icon labelPosition='right'><Icon name='print' size='big'/>Descarca excel</Button>}>
          <ExcelSheet data={procese} name="Procese verbale">
            <ExcelColumn label="Serie" value="serie"/>
            <ExcelColumn label="Numar" value="numar"/>
            <ExcelColumn label="Data" value="data_intocmire"/>
            <ExcelColumn label="Marca" value="marca"/>
            <ExcelColumn label="Contravenient" value="contravenient"/>
            <ExcelColumn label="CNP" value="cnp"/>
            <ExcelColumn label="Adresa" value="adresa"/>
            <ExcelColumn label="Mod solutionare" value="localitate"/>
            <ExcelColumn label="Suma" value="suma"/>
            <ExcelColumn label="Mod intocmire" value="mod_intocmire"/>
          </ExcelSheet>
        </ExcelFile>
        <ReactTable
          data={procese}
          columns={columns}
          defaultPageSize={10}
          previousText="Inapoi"
          nextText="Inainte"
          pageText= 'Pagina'
          ofText= 'din'
          rowsText= 'randuri'
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: (e) => {
                  this.setState({ selected: rowInfo.original})
                },
                style: {
                  background: rowInfo.original === this.state.selected ? '#00afec' : 'white',
                  color: rowInfo.original === this.state.selected ? 'white' : 'black'
                }
              }
            } else {
              return {}
            }
          }}
        />
      </div>
    )
  }
}

export default ListProceseforControlorForm;