import React from 'react';
import './App.css';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import {PersonList, PlanetList, StarshipList} from '../sw-components/allItemLists';
import PersonDetails from '../sw-components/PersonDetails';
import PlanetDetails from '../sw-components/PlanetDetails';
import StarshipDetails from '../sw-components/StarshipsDetails';
import SwapiService from '../../services/swapiService';
import {SwapiServiceProvider} from '../sw-service-context/sw-service-context';

export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      showRandomPlanet: true,
      selectedPerson: null,
    };

    this.swapiService = new SwapiService();
  };

  onItemSelected = (id)=> {
    this.setState({
      selectedPerson: id
    });
  }

  render(){
  return (
    <div>
      <SwapiServiceProvider value={this.swapiService}>
        <Header />
        <RandomPlanet />
        <div className="row mt-3 body-block">
          <div className="col-md-6">
            <PersonList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails itemId={11} />
          </div>
        </div>
        <div className="row mt-3 body-block">
          <div className="col-md-6">
            <PlanetList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PlanetDetails itemId={11} />
          </div>
        </div>
        <div className="row mt-3 body-block">
          <div className="col-md-6">
            <StarshipList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <StarshipDetails itemId={10} />
          </div>
        </div>
      </SwapiServiceProvider>
    </div>
  );}
};