import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import {
  initialCards,
  formConfig,
  popUpProfileSelector,
  popupPlaceSelector,
  formSelector,
  placeFormSelector,
  formSelectorProfile,
  inputSelector,
  cardTemplate,
  cardsContainer,
  // cardListSelector,
  popUpList,
  popUpPlace,
  btnPlaceAdd,
  placeForm,
  btnPlaceAddSelector,
  btnEditProfileSelector,
  placeInputName,
  placeInputLink,
  profileForm,
  profileInputName,
  profileInputJob,
  popUpProfile,
  profile,
  profileName,
  profileInfo,
  btnEditProfile,
  popUpPlaceImg,
  popUpImg,
  popupSelector,
  popUpTitleImg,
} from '../utils/constants.js';

// FUNCTION===============================================================================================
// profile - func

const handleCardClick = (name, link) => {
  popUpTitleImg.textContent = name;
  popUpImg.src = link;
  popUpImg.alt = name;

  popupImage.open(name, link);
};

const handleProfileFormSubmit = (evt) => {
  formValidators['edit-profile'].disableSubmitButton();
  profileName.textContent = profileInputName.value;
  profileInfo.textContent = profileInputJob.value;
  formProfile.close();
};

// place -func

const handlePlaceFormSubmit = (evt) => {
  const cardInsert = new Card(
    {
      name: placeInputName.value,
      link: placeInputLink.value,
    },
    cardTemplate,
    handleCardClick,
  );
  const cardElement = cardInsert.generateCard();
  cardsContainer.prepend(cardElement);
  formPlace.close();
  formValidators['add-place'].resetValidation();
};

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplate, { handleCardClick });

      const cardElement = card.generateCard();

      cardList.setItem(cardElement);
    },
  },
  cardsContainer,
);

const popupImage = new PopupWithImage('.pop-up_place_img');
popupImage.setEventListeners();

// POPUP-FORM-PLACE
const formPlace = new PopupWithForm(popupPlaceSelector, placeFormSelector, inputSelector, handlePlaceFormSubmit);
formPlace.setEventListeners();
// POPUP-FORM-PROFILE
const formProfile = new PopupWithForm(
  popUpProfileSelector,
  formSelectorProfile,
  inputSelector,
  handleProfileFormSubmit,
);
formProfile.setEventListeners();

btnEditProfile.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputJob.value = profileInfo.textContent;
  formProfile.open();
});

btnPlaceAdd.addEventListener('click', () => {
  formPlace.open();
});
// button - func

// const closedPopUpEsc = (evt) => {
//   if (evt.key === 'Escape') {
//     const popUpAcitive = document.querySelector('.pop-up_active');
//     closePopUp(popUpAcitive);
//   }
// };

//popup - func
// const openPopUp = (popup) => {
//   popup.classList.add('pop-up_active');
//   document.addEventListener('keydown', closedPopUpEsc);
// };

// const closePopUp = (popup) => {
//   popup.classList.remove('pop-up_active');
//   document.removeEventListener('keydown', closedPopUpEsc);
// };

// cards - func

// const createCard = (item) => {
//   const card = new Card(item, cardTemplate, handleCardClick);
//   const cardElement = card.generateCard();
//   return cardElement;
// };

// const renderCards = (items) => {
//   items.forEach((item) => {
//     const cardElement = createCard(item);
//     cardsContainer.append(cardElement);
//   });
// };

// renderCards(initialCards);

// validate - func

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(formConfig);

// LISTENERS //==============================================================================

// profile

// profileForm.addEventListener('submit', handleProfileFormSubmit);
// console.log(profileForm);
// // // place

// placeForm.addEventListener('submit', handlePlaceFormSubmit);

// forms

// popUpList.forEach((popUpElement) => {
//   popUpElement.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('pop-up_active')) {
//       closePopUp(popUpElement);
//       console.log('Hello');
//     }
//     if (evt.target.classList.contains('pop-up__close')) {
//       closePopUp(popUpElement);
//       console.log('Helloooooo');
//     }
//   });
// });

cardList.renderItems();
