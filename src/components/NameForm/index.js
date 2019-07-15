import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './nameform.scss';

const NameForm = ({
  inputNameValue,
  changeNameInputValue,
  showInputName,
  showDiv,
  closeDivByMessageArea,
}) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    showDiv();
  };
  const onChangeHandler = (event) => {
    changeNameInputValue(event.target.value);
  };

  const cssClassNames = classNames('header-form', {
    'show-input': showInputName,
  });

  return (
    <div className="header">
      <div className="header-box1" onClick={() => closeDivByMessageArea()}>
        <h2 className="header-box1--title">Chatroom</h2>
      </div>
      <div
        className={cssClassNames}
      >
        <form
          onSubmit={onSubmitHandler}
        >
          <input
            onChange={onChangeHandler}
            value={inputNameValue}
            name="Name"
            type="text"
            className="header-form--input"
            placeholder="Anonymous"
          />
        </form>
      </div>
      <div className="header-box2">
        <button onClick={() => showDiv()} className="header-box2--submit" type="submit">+</button>
      </div>
    </div>
  );
};

NameForm.propTypes = {
  inputNameValue: PropTypes.string.isRequired,
  changeNameInputValue: PropTypes.func.isRequired,
  showInputName: PropTypes.bool.isRequired,
  showDiv: PropTypes.func.isRequired,
  closeDivByMessageArea: PropTypes.func.isRequired,
};

export default NameForm;
