import React from 'react';
import {observer} from 'mobx';

@observer
class Chat extends React.Component {
  render() {
    const chatSession = this.props.store;
    return (
      <div>
        <ul>
          { chatSession.messages.map(
            (message, index) => <Message message={ message } key={ index }/>
          ) }
        </ul>
        <button onClick={ this.onNewMessage }>Send</button>
      </div>
    );
  }

  onNewMessage = () => {
    this.props.store.addMessage(prompt('Enter a new todo:', 'coffee plz'));
  }
}