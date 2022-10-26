import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <header>
        <Link to="/">HOME</Link>
    </header>
  );
}

const mapStateToProps = state => ({
  userAuth: state.userAuth,
  userProfile: state.userProfile,
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null)(Navbar);
