import React, { Component } from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {
  constructor(){
    super();

    this.state = {
      planet: {},
      loading: true,
      error: false
    };

    this.swapiService = new SwapiService();
    this.interval = null;
  };

  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  };

  componentWillUnmount(){
    clearInterval(this.interval);
  };

  onPlanetLoaded = (planet)=> {
    this.setState({
      planet,
      loading: false
    });
  };  

  onError = (err)=> {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = ()=> {
    const id = Math.floor(Math.random()*57) + 2;
    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
  };

  render() {
    const{ togglePlanet } = this.props;

    const {planet, loading, error} = this.state;
    const hasData = !(loading || togglePlanet || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    
    
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({planet})=> {
  const {name, population, rotationPeriod, diameter, id} = planet;

  return(
    <React.Fragment>
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
    </React.Fragment>
  );
};