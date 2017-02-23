import {observable} from 'mobx';

class ChatMessage {
  userId: '';
  @observable messageBody: ''
}

class ChatSession {
  @observable messages = [];

  addMessage(chatMessage) {
    this.messages.push({
      chatMessage
    });
  }
}

export default new ChatSession();
export {ChatSession};