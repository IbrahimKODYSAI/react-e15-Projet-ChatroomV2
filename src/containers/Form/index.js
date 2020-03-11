import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { changeFormInput, sendMessage } from 'src/store/reducers/form';

const mapStateToProps = state => ({
  formInput: state.form.formInput,
});

const mapDispatchToProps = dispatch => ({
  changeFormInput: (message) => {
    dispatch(changeFormInput(message));
  },
  sendMessage: () => {
    dispatch(sendMessage());
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
