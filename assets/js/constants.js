const HOME_PAGE = document.getElementById('mainContainer');
const RENT_CAR_PAGE = document.getElementById('rentCarContainer');
const ATTRACTIONS_PAGE = document.getElementById('attractionsContainer');
const TAXI_PAGE = document.getElementById('taxisContainer');

const likedHomes = document.getElementById('likedHomes');
const likedHomesContainer = document.getElementById('likedHomesContainer');

const allHotelsByDestination = document.getElementById('allHotelsByDestination');
const hotelsByDestinationContainer = document.getElementById('hotelsByDestinationContainer');

const homepageSearchButton = document.getElementById('homepageSearchButton');
const SEARCH_BOX = document.getElementById('search-box');
const currentHotelContainer = document.getElementById('currentHotelContainer');

const ERROR_PAGE = document.getElementById('errorPageContainer');

const MODAL_BG_LOGIN = document.getElementById('modal-bg-login');
const MODAL_BG_REGISTER = document.getElementById('modal-bg-register');
const MODAL_BG_REGISTER_HOME = document.getElementById('modal-bg-register-home');

const LOGIN_BTN = document.querySelector('.loginButton');
const CREATE_PROFILE_BTN = document.querySelector('.createProfileButton');
const REGISTER_NEW_HOME_BTN = document.querySelector('.registerButton');
const GO_TO_REGISTER_BTN = document.getElementById('goToRegistrationButton');
const SUBMIT_BTN_REG = document.getElementById('submitBtnReg');
const LOGIN_BTN_MODAL = document.getElementById('loginBtnModal');
const PROFILE_BUTTON = document.querySelector('.profileButton');
const LOGOUT_BUTTON = document.querySelector('.logoutButton');

const MODAL_CLOSE_LOGIN = document.getElementById('modal-close-login');
const MODAL_CLOSE_REGISTER = document.getElementById('modal-close-register');
const MODAL_CLOSE_REGISTER_HOME = document.getElementById('modal-close-register-home');


USERNAME_INPUT = document.getElementById('usernameInput');
PASSWORD_INPUT = document.getElementById('passwordInput');
USERNAME_INPUT_REG = document.getElementById('usernameInputReg');
PASSWORD_INPUT_REG = document.getElementById('passwordInputReg');
REPEAT_PASSWORD_INPUT = document.getElementById('repeatPasswordInputReg');
EMAIL_INPUT_REG = document.getElementById('emailInputReg');

const HOTEL_PAGE_CONTAINER = document.getElementById('hotelPageContainer');
const ALL_HOTELS_BY_DESTINATION = document.getElementById('allHotelsByDestination')

const SHOW_CURRENT_PAGE = document.getElementById('showCurrentHotel');

const HOTEL_TYPE_FILTER = document.getElementById('hotelsTypeFiltration')
const GUEST_HOUSE_FILTER = document.getElementById('guestHouseFiltration');
const POOL_FILTER = document.getElementById('poolFiltration');
const VILLAS_FILTER = document.getElementById('villasFiltration');
const SPA_FILTER = document.getElementById('spaFiltration');

const ONE_STAR_FILTER = document.getElementById('oneStarFilter');
const TWO_STAR_FILTER = document.getElementById('twoStarsFilter');
const THREE_STAR_FILTER = document.getElementById('threeStarsFilter');
const FOUR_STAR_FILTER = document.getElementById('fourStarsFilter');
const FIVE_STAR_FILTER = document.getElementById('fiveStarsFilter');

const PETS_FILTER = document.getElementById('petsFilter');
const BREAKFAST_FILTER = document.getElementById('breakfastFilter');
const FITNESS_FILTER = document.getElementById('fitnessFilter');

const FANTASTIC_FILTER = document.getElementById('fantasticFilter')
const SUPERB_FILTER = document.getElementById('superbFilter')
const EXCELLENT_FILTER = document.getElementById('excellentFilter')
const VERY_GOOD_FILTER = document.getElementById('veryGoodFilter')
const GOOD_FILTER = document.getElementById('goodFilter')

const FAVOURITES_PAGE = document.getElementById('favouriteHotels');
const ADD_TO_FAV_BTN = document.getElementsByClassName('singleCardAddInFavourites');