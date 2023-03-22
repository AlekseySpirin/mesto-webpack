import Popup from './Popup.js';
import form from '../utils/constants.js';
import inputSelector from '../utils/constants.js';
import btnPlaceAdd from '../utils/constants.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm, buttonSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._formElement = form;
    this._openButton = document.querySelector(buttonSelector);
    this.open = this.open.bind(this);
    this._btnPlaceAdd = btnPlaceAdd;
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll(inputSelector);

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners;
    this._btnPlaceAdd.addEvenlisteners('click', () => {
      super.open();
    });
    this._openButton.addEventListener('click', (evt) => {
      this.open;

      //   if (evt.target.classList.contains('profile_type_open')) {
      //     this.open;
      //   }
    });
    this._formElement.addEvenlisteners('submit', (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}

export default PopupWithForm;
