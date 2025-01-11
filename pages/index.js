import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";

import FormValidator from "../components/FormValidator.js"; //Instantiate below
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form"); //Could replace with: const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: () => {},
});

addTodoPopup.addEventListeners();

//const openModal = (modal) => {
// modal.classList.add("popup_visible");
//};

//const closeModal = (modal) => {
//  modal.classList.remove("popup_visible");
//};

const generateTodo = (data) => {
  //This connects data to generateTodo
  const todo = new Todo(data, "#todo-template"); //Instantiate
  const todoElement = todo.getView(); //The instance of the Todo class is called todo
  return todoElement;
};

//instantiate
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
  },
  containerSelector: ".todos__list",
});

section.renderItems(); //calls section instance's renderItem method.

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

//addTodoCloseBtn.addEventListener("click", () => {
//  addTodoPopup.close();
//});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Creates a date object and adjusts for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4(); //Creates id
  const values = { name, date, id }; //Passes id

  const todo = generateTodo(values); //Missing and needed to pass values
  section.addItem(todo);

  //closeModal(addTodoPopupEl);
  addTodoPopup.close();
});

//Instantiate- assign it to a variable
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation(); //Call the newTodoValidator
