/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Message from 'src/containers/Messages/Message';
import './messages.scss';

/**
 * Code
 */
class Messages extends React.Component {
  componentDidUpdate() {
    this.refToDomElementTeachedByPhilippe.scrollTo(
      0,
      this.refToDomElementTeachedByPhilippe.scrollHeight,
    );
  }

  saveRef = (element) => {
    this.refToDomElementTeachedByPhilippe = element;
  }

  render() {
    const { list } = this.props;
    return (
      <div id="messages" ref={this.saveRef}>
        {list.map(message => (
          <Message
            key={message.id}
            {...message}
          />
        ))}
      </div>
    );
  }
}

Messages.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

/**
 * Export
 */
export default Messages;
