/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './form.scss';

/**
 * Code
 */
class Form extends React.Component {
  handleChange = (event) => {
    const { changeFormInput } = this.props;
    changeFormInput(event.target.value);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { sendMessage } = this.props;
    sendMessage();
  };

  render() {
    const { formInput } = this.props;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <input
          id="form-input"
          placeholder="Votre message"
          type="text"
          autoComplete="off"
          onChange={this.handleChange}
          value={formInput}
        />
      </form>
    );
  }
}

Form.propTypes = {
  formInput: PropTypes.string.isRequired,
  changeFormInput: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Form;
