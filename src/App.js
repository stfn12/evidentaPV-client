import React from 'react';
import {connect} from 'react-redux';
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProcesePage from "./components/pages/ProcesePage";
import AddProcesPage from './components/pages/AddProcesPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';

const App = ({location, isAuthenticated}) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation/>}
    <Route location ={location} path="/" exact component={HomePage}/>
    <GuestRoute location ={location} path="/login" exact component={LoginPage}/>
    <UserRoute location ={location} path="/procese" exact component={ProcesePage}/>
    <UserRoute location ={location} path="/procese/new" exact component={AddProcesPage}/>
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
