import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/auth';

const TopNavigation = ({user, logout}) => (
  <Menu secondary pointing >
    <Menu.Item as={Link} to="/procese">Procese verbale</Menu.Item>
    <Menu.Item as={Link} to="/chitante">Chitante</Menu.Item>
    <Menu.Item as={Link} to="/controlori">Controlori</Menu.Item>
    <Menu.Item as={Link} to="/rapoarte">Rapoarte</Menu.Item>
    <Menu.Item position="right" onClick={() => logout()}>Logout</Menu.Item>
  </Menu>
);

TopNavigation.propTypes ={
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);