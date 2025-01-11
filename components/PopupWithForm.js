import Popup from "./Popup";

class PopupWithForm extends Popup {
  //extends makes this a child class of Popup
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector }); //object literal, not destructuring-- { popupSelector: popupSelector}
  }
}

_getInputValues();

export default PopupWithForm;

//the super method calls the constructor of the parent class- pass it an argument
//destructuring allows you to grab properties from inside an object and assign them to variables. So now we have variables called popupSelector and handleFormSubmit that are available inside the function
