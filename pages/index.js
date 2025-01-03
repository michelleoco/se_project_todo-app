import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";

import FormValidator from "../components/FormValidator.js"; //Instantiate below

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form"); //Could replace with: const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  //This connects data to generateTodo
  const todo = new Todo(data, "#todo-template"); //Instantiate
  const todoElement = todo.getView(); //The instance of the Todo class is called todo
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Creates a date object and adjusts for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4(); //Creates id
  const values = { name, date, id }; //Passes id
  renderTodo(values); //Calls the renderTodo below

  closeModal(addTodoPopup);
});

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
};

//Connects the array of objects in constants.js to generateTodo above
initialTodos.forEach((item) => {
  renderTodo(item); //Calls renderTodo above
});

//Instantiate- assign it to a variable
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation(); //Call the newTodoValidator
