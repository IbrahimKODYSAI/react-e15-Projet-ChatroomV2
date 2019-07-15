// == Import : npm
import React from 'react';
import io from 'socket.io-client';

// == Import : local
import './app.scss';
import MessageForm from 'src/components/MessageForm';
import NameForm from 'src/components/NameForm';
import MessageArea from 'src/components/MessageArea';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MessagesList: [],
      inputNameValue: 'Anonymous',
      inputMessageValue: '',
      showInputName: true,
    };
  }

  componentDidMount() {
    this.socket = io('http://localhost:3001');
    this.socket.on('send_message', (msg) => {
      this.setState({ MessagesList: [...this.state.MessagesList, msg] });
    });
  }

  closeDivByMessageArea = () => {
    this.setState({
      showInputName: true,
    });
  }

  showDiv = () => {
    const { showInputName } = this.state;
    this.setState({
      showInputName: showInputName === null ? showInputName : !showInputName,
    });
  }


  changeNameInputValue = (newinputValue) => {
    this.setState({
      inputNameValue: newinputValue,
    });
  }

  changeInputMessageValue = (newInputValue) => {
    this.setState({
      inputMessageValue: newInputValue,
    });
  }

  addMessage = () => {
    const { inputMessageValue, inputNameValue } = this.state;
    // const allIds = MessagesList.map(message => message.id);
    // const id = allIds.length > 0 ? Math.max(...allIds) + 1 : 1;
    console.log(inputMessageValue);
    this.socket.emit('send_message', { pseudo: inputNameValue, label: inputMessageValue });
    this.setState({
      inputMessageValue: '',
    });
  }

  render() {
    const {
      MessagesList,
      inputMessageValue,
      inputNameValue,
      showInputName,
    } = this.state;
    return (
      <div className="container">
        <div className="chat-input--name">
          <NameForm
            closeDivByMessageArea={this.closeDivByMessageArea}
            showInputName={showInputName}
            showDiv={this.showDiv}
            inputNameValue={inputNameValue}
            changeNameInputValue={this.changeNameInputValue}
          />
        </div>
        <div className="chat-messages">
          <MessageArea
            closeDivByMessageArea={this.closeDivByMessageArea}
            MessagesList={MessagesList}
          />
        </div>
        <div className="chat-input--messages">
          <MessageForm
            addMessage={this.addMessage}
            changeInputMessageValue={this.changeInputMessageValue}
            inputMessageValue={inputMessageValue}
          />
        </div>
      </div>
    );
  }
}


// == Export
export default App;
