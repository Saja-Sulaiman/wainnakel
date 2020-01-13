import React from 'react';
import logo from '../../logos/logo.png';
import './InitialPage.css';
import SuggestionButton from '../SuggestionButton/SuggestionButton';

const InitialPage = () => {
  return (
    <div className="initial-page">
        <img src={logo} className="logo" alt="logo" />
        <h1>وين ناكل؟</h1>
        <div className="button button-group">
          <SuggestionButton />
        </div>
    </div>
  );
}

export default InitialPage;