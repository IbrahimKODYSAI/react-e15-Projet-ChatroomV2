// 6. je branche mes composants au state via les containers
// mes props seront alimentés par le state

import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

// 6.5 en lecture
const mapStateToProps = state => ({
  list: state.messages.list,
});

const mapDispatchToProps = {};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

export default MessagesContainer;
