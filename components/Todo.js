class Todo {
    constructor(data, selector) { //(selector could also be called templateSelector bc it allows us to select the template in the html) The constructor method gets called when you call the class using the 'new' keyword in index.js.
      this._data = data; //Common pattern: for every argument, you assign it a value on the this object. You'll be able to access it anywhere you need it. 
      this._templateElement = document.querySelector(selector); //Usually we could do this._selector = selector, but bc we need to select the template, we use queryselector here. Don't pass "#todo-template" (the literal string), bc we used the argument selector, so use selector.
    }

    _setEventListeners() { //Underscores mean private aka not to be used outside of the class.
        this._todoCheckboxEl.addEventListener("change", () => {
          this._data.completed = !this._data.completed; //when clicked, change completion status from true to false or vice versa. This is a common pattern to change from true to false or false to true. 
        }); //We need to do this so that we have a connection btw the visible completion status and the actual completion status. 

       this._todoDeleteBtn.addEventListener("click", () => { 
       this._todoElement.remove(); //removes the todoElement
      });
    }

    _setDueDate(todoDate) {
      const dueDate = new Date(this._data.date);
      if (!isNaN(dueDate)) {
        todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}`;
      }
    }

    _generateCheckboxEl() { //Creates a method for checkbox and checkbox-label related stuff. Moved out of getView to keep organized. Call in getView. 
       this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed"); //Declares variable
       this._todoLabel = this._todoElement.querySelector(".todo__label"); //Declares variable
       this._todoCheckboxEl.checked = this._data.completed; //Sets checked status appropriately
       this._todoCheckboxEl.id = `todo-${this._data.id}`; //Establishes relationship btw 'for' and 'id' attributes in the html
       this._todoLabel.setAttribute("for", `todo-${this._data.id}`); //Establishes relationship btw 'for' and 'id' attributes in the html
    }

    getView () {   //Using this. makes the variables available everywhere.
        this._todoElement = this._templateElement.content
        .querySelector(".todo")
       .cloneNode(true); //Replaces the queryselector from index.js that we removed. It selects and clones the template created in the html. 
       
       const todoNameEl = this._todoElement.querySelector(".todo__name");
       const todoDate = this._todoElement.querySelector(".todo__date");
       
       this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

       todoNameEl.textContent = this._data.name; //The name property is being stored in data. Here we call todoNameEl.textContent and make it equal to data.name
      
       //After moving checbox related stuff to its own method, call the function:
       this._generateCheckboxEl(); //Inside a function to call a method you reference the 'this' object
       this._setEventListeners();
       this._setDueDate(todoDate);

       return this._todoElement; //Return the todoElement variable to return the finished Todo element
    }
}

  export default Todo;




