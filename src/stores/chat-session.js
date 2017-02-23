import {observable} from 'mobx';

class ChatMessage {
  constructor(userId, body) {
    this.userId = userId;
    this.body = body;
  }
  userId: '';
  @observable body: ''
}

class ChatSession {
  @observable messages = [
    new ChatMessage('Bob', 'one'),
    new ChatMessage('Bob', 'two'),
    new ChatMessage('Dave', 'three')
  ];

  addMessage(chatMessage) {
    this.messages.push({
      chatMessage
    });
  }
}

export default new ChatSession();
export {ChatSession};