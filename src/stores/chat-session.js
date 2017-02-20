import {observable} from 'mobx';

class ChatMessage {
  @observable userId: '';
  @observable messageBody: ''
}


class ChatSession {
  @observable messages = [];

  addMessage(message) {
    this.messages.push({
      message
    });
  }
}


const observableTodoStore = new ObservableTodoStore();