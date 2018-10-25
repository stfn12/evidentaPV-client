import React from 'react';
import axios from "axios";
import moment from "moment";
import ReactTable from "react-table";
import { connect } from 'react-redux';

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
    const { procese, loading } = this.state;
    this.loadProcese();
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

function mapStateToProps(state) {
  return {
    selectedProces: state.selected
  }
}

export default connect(mapStateToProps) (ListProceseForm);