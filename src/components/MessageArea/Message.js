import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ pseudo, label }) => (
  <li className="Message">
    <p className="Message-name">{pseudo}</p>
    <span className="Message-label">{label}</span>
  </li>
);

Message.propTypes = {
  pseudo: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Message;
