import React from 'react';
import {connect} from 'react-redux';
import { Route} from "react-router-dom";
import PropTypes from 'prop-types';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProcesePage from "./components/pages/ProcesePages/ProcesePage";
import AddProcesPage from './components/pages/ProcesePages/AddProcesPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import EditProcesPage from "./components/pages/ProcesePages/EditProcesPage";
import ChitantePage from "./components/pages/ChitantePages/ChitantePage";
import AddChitantaPage from "./components/pages/ChitantePages/AddChitantaPage";
import EditChitantaPage from "./components/pages/ChitantePages/EditChitantaPage";
import ControloriPage from "./components/pages/ControloriPages/ControloriPage";
import AddControlorPage from "./components/pages/ControloriPages/AddControlorPage";
import EditControlorPage from "./components/pages/ControloriPages/EditControlorPage";

const App = ({location, isAuthenticated}) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation/>}
    <Route location ={location} path="/" exact component={HomePage}/>
    <GuestRoute location ={location} path="/login" exact component={LoginPage}/>
    <UserRoute location ={location} path="/procese" exact component={ProcesePage}/>
    <UserRoute location ={location} path="/procese/new" exact component={AddProcesPage}/>
    <UserRoute location ={location} path="/procese/edit" exact component={EditProcesPage}/>
    <UserRoute location ={location} path="/chitante" exact component={ChitantePage}/>
    <UserRoute location ={location} path="/chitante/new" exact component={AddChitantaPage}/>
    <UserRoute location ={location} path="/chitante/edit" exact component={EditChitantaPage}/>
    <UserRoute location ={location} path="/controlori" exact component={ControloriPage}/>
    <UserRoute location ={location} path="/controlori/new" exact component={AddControlorPage}/>
    <UserRoute location ={location} path="/controlori/edit" exact component={EditControlorPage}/>
</div>);

App.propTypes ={
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return{
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps)(App);
