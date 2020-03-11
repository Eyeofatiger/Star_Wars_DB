import React from 'react';
import './App.css';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import ItemList from '../itemList/ItemList';
import PersonDetails from '../personDetails/PersonalDetails';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;