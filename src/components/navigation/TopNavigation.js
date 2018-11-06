import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Menu, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/auth';

const TopNavigation = ({user, logout}) => (
  <Menu pointing size='massive'>
    <Menu.Item as={Link} to="/procese"><Icon name='list'/>Procese verbale</Menu.Item>
    <Menu.Item as={Link} to="/chitante"><Icon name='file'/> Chitante</Menu.Item>
    <Menu.Item as={Link} to="/controlori"><Icon name='users'/> Controlori</Menu.Item>
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