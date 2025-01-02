import { v4 as uuidv4 } from 'https://jspm.dev/uuid'; //external imports go at the top

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";

import FormValidator from "../components/FormValidator.js";
//instantiate: calls the constructor function and returns an instance of the class. It's below:

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
//const todoTemplate = document.querySelector("#todo-template"); ->remove bc added into generateTodo below
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => { //This connects data to generateTodo
  const todo = new Todo(data, "#todo-template"); //INSTANTIATE: New keyword and class name calls the Todo class constructor
  const todoElement = todo.getView(); //The instance of the Todo class is called 'todo'. To call one of its methods: todo.getView() =>instancename.methodname
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

  const id = uuidv4(); //creates id
  const values = { name, date, id }; //passes id 
  const todo = generateTodo(values);
  todosList.append(todo);

  ////////////////////Does this go here??????///////////////////////////
  const todoReset = new FormValidator(validationConfig, addTodoForm); //Are these the right arguments?
  todoReset.resetValidation(); //IS THIS RIGHT???? Calls the resetValidation method

  closeModal(addTodoPopup);
});

//This connects the array of objects in constants.js to generateTodo above
initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});

//Instantiate- assign it to a variable
//new FormValidator();
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

newTodoValidator.enableValidation(); //Need to call the newTodoValidator. Syntax for calling a method of a class instance outside of the class: class instance(the variable name) then dot then method name