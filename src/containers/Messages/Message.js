import { connect } from 'react-redux';

import Message from 'src/components/Messages/Message';

const mapStateToProps = (state, ownProps) => ({
  myself: state.settings.currentUser === ownProps.user,
});

const mapDispatchToProps = {};

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

export default MessageContainer;
