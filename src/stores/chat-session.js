import {observable} from 'mobx';

class ChatMessage {
  @observable userId: '';
  @observable messageBody: ''
}


class ChatSession {
  @observable messages = [];

  @computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  addMessage(message) {
    this.messages.push({
      message
    });
  }
}


const observableTodoStore = new ObservableTodoStore();