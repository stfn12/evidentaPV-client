import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/auth';

const TopNavigation = ({user, logout}) => (
  <Menu secondary pointing >
      <Dropdown text="Procese verbale">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/procese">Adauga</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={Link} to="/procese">Editeaza</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    <Dropdown text="Chitante">
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/chitante">Adauga</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item as={Link} to="/chitante">Editeaza</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text="Controlori">
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/controlori">Adauga</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item as={Link} to="/controlori">Editeaza</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item position="right" onClick={() => logout()}>Logout</Menu.Item>
  </Menu>
);

TopNavigation.propTypes ={
  user:PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);