import React, { Component } from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapiService';

export default class RandomPlanet extends Component {
  constructor(){
    super();

    this.state = {
      planet: {}
    };

    this.swapiService = new SwapiService();
    this.updatePlanet();
  };

  onPlanetLoaded = (planet)=> {
    this.setState({planet});
  };  

  updatePlanet = ()=> {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded);
  };

  render() {

    const {planet: {population, rotationPeriod, diameter, name, id}} = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population: </span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period: </span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter: </span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}