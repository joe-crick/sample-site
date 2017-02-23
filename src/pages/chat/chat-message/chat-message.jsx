import React from 'react';
import Dropdown from '../../../components/dropdown/dropdown';
import './chat-message.scss';

const {string, bool, func} = React.PropTypes;

const ChatMessage = props => {
  return (
    <div className="list-group-item chat-message">
      <div>
        <h4 className="list-group-item-heading">{props.message.userId}</h4>
        <div>
          {props.isEditing
            ? <input type="text"/>
            : <p className="list-group-item-text">{props.message.body}</p>}
        </div>
      </div>
      <div className="item-menu">
        <Dropdown>
          <li>
            <button onClick={props.editMessage}>Edit</button>
          </li>
          <li>
            <button onClick={props.deleteMessage}>Delete</button>
          </li>
        </Dropdown>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  name: string,
  body: string,
  isEditing: bool,
  editMessage: func,
  deleteMessage: func
};

export default ChatMessage;