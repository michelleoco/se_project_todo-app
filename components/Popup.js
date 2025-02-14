class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector); //CSS class selector for the element where to-do elements are added
    this.popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }; //JS bind method could also be a solution here to make sure this is representing an instance of the class and not the document

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  //Handles close btn and modal listener
  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__close")
      )
        this.close();
    });
  }
}

export default Popup;

//popup and modal are used interchangeably
