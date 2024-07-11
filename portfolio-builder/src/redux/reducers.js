// src/redux/reducers.js
import { combineReducers } from 'redux';
import { UPDATE_PROFILE, SELECT_PORTFOLIO, UPDATE_THEME } from './actions';

const initialProfileState = {
  name: '',
  designation: '',
  location: '',
  bio: ''
};
const initialThemeState = '#FFFFFF'; // Initial theme state

const themeReducer = (state = initialThemeState, action) => {
    switch (action.type) {
      case UPDATE_THEME:
        return action.payload;
      default:
        return state;
    }
  };

const profileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialPortfolioState = {
  portfolios: []
};

const portfolioReducer = (state = initialPortfolioState, action) => {
  switch (action.type) {
    case SELECT_PORTFOLIO:
      return { ...state, selectedPortfolio: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  profile: profileReducer,
  portfolio: portfolioReducer,
  theme: themeReducer
});

export default rootReducer;
