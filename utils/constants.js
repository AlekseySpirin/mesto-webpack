export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export const formConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.pop-up__button',
  inactiveButtonClass: 'pop-up__button_disabled',
  inputErrorClass: 'form__item_invalid',
  errorClass: 'form__item-error',
};

// CARDS //
export const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
export const cardListSelector = '.cards';
export const cardsContainer = document.querySelector('.cards');
export const popUpList = document.querySelectorAll('.pop-up');

// POP-UP // PLACE //
export const popupSelector = '.pop-up';
export const popupPlaceSelector = '.pop-up_place_add-place';
export const popUpPlace = document.querySelector('.pop-up_place_add-place');
export const btnPlaceAdd = document.querySelector('.profile__add-button');
export const btnPlaceAddSelector = '.profile__add-button';
export const formSelector = '.form';
export const form = document.querySelector('.form');
export const inputSelector = '.form__item';
// FORM // PLACE //
export const placeFormSelector = '.form_place_add-place';
export const placeForm = popUpPlace.querySelector('.form_place_add-place');
export const placeInputName = placeForm.querySelector('.form__item_el_name');
export const placeInputLink = placeForm.querySelector('.form__item_el_link');

// FORM // PROFILE //
export const formSelectorProfile = '.form_place_edit-profile';
export const profileForm = document.querySelector('.form_place_edit-profile');
export const profileInputName = profileForm.querySelector('.form__item_el_name');
export const profileInputJob = profileForm.querySelector('.form__item_el_job');

// POP-UP // PROFILE //
export const popUpProfileSelector = '.pop-up_place_profile';
export const popUpProfile = document.querySelector('.pop-up_place_profile');
export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const profileInfo = profile.querySelector('.profile__info');

// BTN-EDIT // PROFILE

export const btnEditProfile = profile.querySelector('.profile__edit-button');
export const btnEditProfileSelector = '.profile__edit-button';
// POP-UP // IMG //

export const popUpPlaceImg = document.querySelector('.pop-up_place_img');
export const popUpImg = document.querySelector('.pop-up__img');
export const popUpTitleImg = document.querySelector('.pop-up__title-img');
