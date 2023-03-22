import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithImage.js';
import {
  initialCards,
  formConfig,
  popUpProfileSelector,
  popupPlaceSelector,
  formSelectorProfile,
  cardTemplate,
  cardsContainer,
  // cardListSelector,
  popUpList,
  popUpPlace,
  btnPlaceAdd,
  placeForm,
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
  evt.preventDefault();
  formValidators['edit-profile'].disableSubmitButton();
  profileName.textContent = profileInputName.value;
  profileInfo.textContent = profileInputJob.value;
  closePopUp(popUpProfile);
};

// place -func

const handlePlaceFormSubmit = (evt) => {
  evt.preventDefault();

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
  closePopUp(popUpPlace);
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

// FORM
const formPlace = new PopupWithForm(popupPlaceSelector, handlePlaceFormSubmit, '.profile__add-button');
formPlace.setEventListeners();
// PROFILE
const formProfile = new PopupWithForm(popUpProfileSelector, handleProfileFormSubmit);
formProfile.setEventListeners();
btnEditProfile.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputJob.value = profileInfo.textContent;
  formProfile.open();
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
// console.log(btnEditProfile);
// btnEditProfile.addEventListener('click', () => {
//   profileInputName.value = profileName.textContent;
//   profileInputJob.value = profileInfo.textContent;
//   formProfile.open();
// });

// place

// placeForm.addEventListener('submit', handlePlaceFormSubmit);
console.log(btnPlaceAdd);
btnPlaceAdd.addEventListener('click', () => {
  formPlace.open();
});

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
