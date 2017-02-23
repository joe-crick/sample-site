import React from 'react';
import {observer} from 'mobx-react';
import Chat from './chat/chat';

@observer
class Home extends React.Component {
  render() {
    return (
      <div>
        <Chat/>
      </div>
    );
  }
}

export default Home;