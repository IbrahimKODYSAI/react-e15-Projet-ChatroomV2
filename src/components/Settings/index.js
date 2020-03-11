// 2. je décris mes composant de présentation

/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */

// 2.5 je peux styler mon application
import './settings.scss';

/**
 * Code
 */
class Settings extends React.Component {
  // handleChange = ({ target: { value: inputValue } }) => {
  //   const { changeInput } = this.props;
  //   changeInput(inputValue);
  // };
  handleChange = (event) => {
    const { changeInput } = this.props;
    changeInput(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { submitForm, username } = this.props;
    if (!this.checkFormError(username)) {
      // dans mon composant je peux utiliser mes props qui viennent du container
      // je peux executer les fonctions venant de mDTP pour
      // émettre une action en réponse à un évenement
      submitForm();
    }
  };

  // checkFormError = (str) => {
  //   return str.trim().length < 2;
  // }
  checkFormError = str => str.trim().length < 2;

  render() {
    // 3. je peux décrire mes composants en fonction de props
    // un composant aura un rendu différent suivant le contexte / suivant les props
    const { open, clickPlus, username } = this.props;

    const classCSS = classNames({
      'settings--open': open,
      'settings--error': this.checkFormError(username),
    });

    return (
      <div id="settings" className={classCSS}>
        <div id="settings-toggle" onClick={clickPlus} />
        <form autoComplete="off" id="settings-form" onSubmit={this.handleSubmit}>
          <input
            id="settings-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          <button id="settings-button" type="submit">
            ok
          </button>
        </form>
      </div>
    );
  }
}

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  clickPlus: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Settings;
