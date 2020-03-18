import React from 'react';
import './App.css';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import SwapiService from '../../services/swapiService';
import {SwapiServiceProvider} from '../sw-service-context/sw-service-context';
import PeoplePage from '../pages/peoplePage';
import PlanetPage from '../pages/planetPage';
import StarshipPage from '../pages/starshipPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import StarshipsDetails from '../sw-components/StarshipsDetails';
import SecretPage from '../pages/secretPage';
import LoginPage from '../pages/loginPage';


export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      showRandomPlanet: true,
      isLoggedIn: false
    };

    this.swapiService = new SwapiService();
  };

  render(){
    return (
      <div>
        <SwapiServiceProvider value={this.swapiService}>
          <BrowserRouter>
            <Header />
            <RandomPlanet />
            <Switch>
              <Route path="/" exact render={()=> <h2 className="ml-3">Welcom to StarDB!!!</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planet" component={PlanetPage} />
              <Route path="/starship" exact component={StarshipPage} />
              <Route path="/starship/:id" render={({match})=> <StarshipsDetails itemId={match.params.id} />} />
              <Route path="/secret/" render={()=><SecretPage isLoggedIn={this.state.isLoggedIn} />} />
              <Route path="/login" render={()=> <LoginPage isLoggedIn={this.state.isLoggedIn} 
                                                          onLogin={()=>{this.setState({isLoggedIn: true})}} />} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </SwapiServiceProvider>
      </div>
    );
  }
};