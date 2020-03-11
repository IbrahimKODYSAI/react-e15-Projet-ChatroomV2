import { connect } from 'react-redux';

import {
  settingsToggle,
  changeSettingsUsername,
  changeCurrentUser,
} from 'src/store/reducers/settings';
import Settings from 'src/components/Settings';

const mapStateToProps = state => ({
  open: state.settings.settingsOpen,
  username: state.settings.settingsUsername,
});

// je rends disponible des props dans mon composant
// ces props représentent des fonctions, qui pourront être executés au besoin des intéractions
const mapDispatchToProps = dispatch => ({
  clickPlus: () => {
    // dans ces fonctions j'utilise le dispatch (qui vient indirectement du store)
    // pour émettre mes actions retournées par mes actions creators
    dispatch(settingsToggle());
  },
  changeInput: (currentInputValue) => {
    dispatch(changeSettingsUsername(currentInputValue));
  },
  submitForm: () => {
    dispatch(changeCurrentUser());
  },
});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
