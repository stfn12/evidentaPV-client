import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const MenuPage = ({ isAuthenticated }) => (
  <div>
    <h1>Main Menu</h1>
  </div>
);

MenuPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps)(MenuPage);