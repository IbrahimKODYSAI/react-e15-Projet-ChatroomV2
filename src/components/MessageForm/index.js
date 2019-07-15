import React from 'react';
import PropTypes from 'prop-types';

import './messageform.scss';

const MessageForm = ({ inputMessageValue, changeInputMessageValue, addMessage }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    addMessage();
  };
  const changeHandler = (event) => {
    changeInputMessageValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        value={inputMessageValue}
        name="newTask"
        type="text"
        id="input-messages"
        placeholder="Votre message"
      />
    </form>
  );
};

MessageForm.propTypes = {
  inputMessageValue: PropTypes.string.isRequired,
  changeInputMessageValue: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default MessageForm;
