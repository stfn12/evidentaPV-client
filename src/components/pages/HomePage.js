import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions  from '../../actions/auth';
import Redirect from "react-router-dom/es/Redirect";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1 align="center">Evidenta PV controlori</h1>
    { isAuthenticated ?
      <Redirect to="/procese"/>: <Redirect to="/login"/>}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);