import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  const headerStyles = {
    backgroundColor: 'blue',
    color: 'red',
  };
  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

Header.defaultProps = {
  text: 'Feedback UI',
  backgroundColor: 'red',
  color: 'blue',
};

export default Header;
