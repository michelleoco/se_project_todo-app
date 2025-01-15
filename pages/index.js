import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text"); //Instantiate

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (data) => {
    const name = data.name;
    const dateInput = data.date;

    const date = new Date(dateInput); // Creates a date object and adjusts for timezone
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4(); //Creates id
    const values = { name, date, id }; //Passes id

    const todo = generateTodo(values);
    section.addItem(todo);

    addTodoPopup.close();
  },
});

addTodoPopup.setEventListeners();

const generateTodo = (data) => {
  //Connects data to generateTodo
  const todo = new Todo(data, "#todo-template", handleCheck); //Instantiate- assign it to a variable
  const todoElement = todo.getView(); //The instance of the Todo class is called todo
  return todoElement;
};

//Instantiate
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
  },
  containerSelector: ".todos__list",
});

section.renderItems(); //Calls section instance's renderItem method

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

//Instantiate
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation(); //Call the newTodoValidator

//addTodoCloseBtn.addEventListener("click", () => {
//  addTodoPopup.close();
//});

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   // Creates a date object and adjusts for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4(); //Creates id
//   const values = { name, date, id }; //Passes id

//   const todo = generateTodo(values); //Missing and needed to pass values
//   section.addItem(todo);

//   //closeModal(addTodoPopupEl);
//   addTodoPopup.close();
// });
