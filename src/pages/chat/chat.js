import React from 'react';
import {observer} from 'mobx-react';
import Message from './chat-message/chat-message';
import './chat.scss';

const {object} = React.PropTypes;

// Or in ES6:
@observer
class Chat extends React.Component {
  render() {
    const chatSession = this.props.store;
    return (
      <div>
        <ul class="chat-messages">
          { chatSession.messages.map((message, index) => <Message message={ message }
                                                                  key={ index }/>) }
        </ul>
        <button className="btn btn-primary" onClick={ this.onNewMessage }>Send</button>
      </div>
    );
  }
}
Chat.propTypes = {
  store: object,
};


export default Chat;