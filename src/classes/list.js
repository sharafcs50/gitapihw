'use strict';

/*
  The code in here is just an example to show you can use Classes in this starter
  go ahead and delete it all to get started on your own project!
*/

export class List {
  _state = {
    title: '',
    entries: [],
  };

  constructor(title, entries) {
    this.title = title;
    this.entries = entries;
  }

  // getters & setters
  get title() {
    return this._state.title;
  }
  set title(newTitle) {
    if (typeof newTitle !== 'string') {
      throw new TypeError('newTitle is not a string');
    }
    this._state.title = newTitle;
  }
  get entries() {
    return [...this._state.entries];
  }
  set entries(newEntries) {
    if (!Array.isArray(newEntries)) {
      throw new TypeError('newEntries is not an array');
    }
    if (newEntries.some((entry) => !entry || typeof entry !== 'object')) {
      throw new TypeError('some entries are not objects');
    }
    this._state.entries = [...newEntries];
  }

  // logic methods
  toggleCompleted(position) {
    if (position < 0 || this.entries.length <= position) {
      return;
    }
    const todo = this.entries[position];
    todo.completed = !todo.completed;
  }

  // view methods
  createDeleteButton() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }

  render() {
    const todosUl = document.createElement('ul');

    for (let position = 0; position < this.entries.length; position++) {
      // ...
    }

    return todosUl;
  }
}
