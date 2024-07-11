// src/redux/actions.js

export const UPDATE_THEME = 'UPDATE_THEME';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const SELECT_PORTFOLIO = 'SELECT_PORTFOLIO';

export const updateTheme = (theme) => ({
  type: UPDATE_THEME,
  payload: theme
});

export const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  payload: profile
});

export const selectPortfolio = (portfolio) => ({
  type: SELECT_PORTFOLIO,
  payload: portfolio
});

