// DarkTheme.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setDarkTheme, setLightTheme } from './darkThemeSlice';

const DarkTheme = () => {
  const isDarkTheme = useSelector((state) => state.darktheme.isDarkTheme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  const setDarkThemeHandler = () => {
    dispatch(setDarkTheme());
  };

  const setLightThemeHandler = () => {
    dispatch(setLightTheme());
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <h1>Dark Theme Example</h1>
      <button onClick={toggleThemeHandler}>Toggle Theme</button>
      <button onClick={setDarkThemeHandler}>Set Dark Theme</button>
      <button onClick={setLightThemeHandler}>Set Light Theme</button>
      <p>Current Theme: {isDarkTheme ? 'Dark' : 'Light'}</p>
    </div>
  );
};

export default DarkTheme;
