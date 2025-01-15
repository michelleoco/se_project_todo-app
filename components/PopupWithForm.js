import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  //extends makes this a child class of Popup
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector }); //object literal, not destructuring-- { popupSelector: popupSelector}
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  getForm() {
    return this._popupForm;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }
}

export default PopupWithForm;

//the super method calls the constructor of the parent class- pass it an argument
//destructuring allows you to grab properties from inside an object and assign them to variables. So now we have variables called popupSelector and handleFormSubmit that are available inside the function
