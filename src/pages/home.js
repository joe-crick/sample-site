import React from 'react';
import {observer} from 'mobx-react';
import Chat from './chat/chat';

const {object} = React.PropTypes;

@observer
class Home extends React.Component {
  render() {
    return (
      <div>
        <Chat store={this.props.store}/>
      </div>
    );
  }
}

Home.propTypes = {
  store: object
};

export default Home;