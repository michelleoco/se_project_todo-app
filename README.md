# Simple Todo App

_A clean and simple to-do list application with object-oriented JavaScript._

---

## Live Project

**Domain:** [https://michelleoco.github.io/se_project_todo-app/](https://michelleoco.github.io/se_project_todo-app/)

---

## Introduction

**Simple Todo App** is a straightforward application that helps users track tasks and deadlines. This project involved refactoring existing JavaScript code into an object-oriented design to improve maintainability and clarity.

---

## Project Goals

- Build a user-friendly to-do list interface.
- Refactor legacy JavaScript into clean, modular OOP classes.
- Enable adding, completing, and deleting tasks with ease.
- Ensure reliable input validation for task forms.

---

## What Was Done

Key development steps included:

1. **Functionality Implementation**

   - Added a button to open a pop-up form for new tasks.
   - Collected task description and due date from users.
   - Created checkboxes to mark tasks as complete.
   - Provided delete buttons for task removal.

2. **Object-Oriented Refactoring**

   - Developed a **Todo** class to manage individual tasks.
   - Created a **FormValidator** class to validate form inputs.
   - Applied modular design for better code organization.

3. **Unique ID Generation**

   - Used the **uuid** package to assign unique identifiers to tasks.

---

## Features

- Add new to-do items with description and due date.
- Mark tasks complete with checkboxes.
- Delete tasks individually.
- Form validation for task inputs.

---

## Technologies

- **HTML5** – Structure and markup
- **CSS3** – Styling and layout
- **JavaScript (ES6)** – Logic refactored into OOP classes
- **uuid** – Unique ID generation for tasks

---

## Screenshots

**Todo App Interface**  
![Todo App Screenshot](./screenshots/todo_app_screenshot.pdf)

---

## Conclusion

The Simple Todo App provides an easy-to-use task management tool with clean, object-oriented JavaScript architecture that improves code maintainability.

---

## Future Improvements

- **Add localStorage support** to save tasks between sessions.
- **Fix**: Enhance form validation **to achieve** more robust user input handling.
- **Implement task editing** for updating existing items.
- **Add filtering and sorting** of tasks by date or completion status.

---

## Deployment & Requirements

**Requirements:**

- Modern web browser (Chrome, Firefox, Edge, Safari)

**Installation:**

```bash
git clone https://github.com/michelleoco/se_project_todo-app.git
cd se_project_todo-app
# Open index.html in your browser or serve with any static server
```
