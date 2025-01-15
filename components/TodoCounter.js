class TodoCounter {
  // todos should be the array of initial todos
  // selector is the selector for the counter text element
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todoItem) => todoItem.completed).length; // number of completed todos
    this._total = todos.length; // the total number of todos
    this._updateText();
  }

  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
  updateCompleted = (increment) => {
    this._completed += increment ? 1 : -1;
    // if increment is true, add 1 to this._completed. Otherwise,
    // subtract 1.
    // if (increment) {
    //   this._completed++;
    // } else {
    //   this._completed--;
    // }
    this._updateText();
  };

  // Call this when a to-do is deleted, or when a to-do is
  // created via the form.
  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;
    // if increment is true, add 1 to this._total. Otherwise,
    // subtract 1.
    this._updateText();
  };

  // Call the method to update the text content
  _updateText() {
    // Sets the text content of corresponding text element.
    // Call this in the constructor, and whenever the counts get updated.
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
