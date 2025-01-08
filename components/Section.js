class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items; //Array of data, adds to the page when it loads
    this._renderer = renderer; //Function that creates and adds a single item to the page
    this._container = document.querySelector(containerSelector); //CSS class selector for the element where to-do elements are added
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}

export default Section;
