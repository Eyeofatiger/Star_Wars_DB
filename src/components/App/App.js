import React from 'react';
import './App.css';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import ItemList from '../itemList/ItemList';
import ItemDetails from '../itemDetails/ItemDetails';
import SwapiService from '../../services/swapiService';

export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      showRandomPlanet: true,
      selectedPerson: null,
      togglePlanet: false
    };

    this.swapiService = new SwapiService();
  };

  onItemSelected = (id)=> {
    this.setState({
      selectedPerson: id
    });
  }

  onToggleRandomPlanet = ()=> {
    const showRanPlanet = this.state.togglePlanet;
    this.setState(()=>{
      return {
        togglePlanet: !showRanPlanet
      };
    });
  }

  render(){

    const {selectedPerson, togglePlanet} = this.state;

  return (
    <div>
      <Header />
      <RandomPlanet togglePlanet={togglePlanet} />
      <button className="btn btn-warning ml-3" 
              type="button"
              onClick={this.onToggleRandomPlanet}>Toggle random planets</button> 

      <div className="row mt-3 body-block">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getAllPeople}
                    renderItem={(item)=> `${item.name} (${item.gender})`} />
        </div>
        <div className="col-md-6">
          <ItemDetails itemId={selectedPerson} 
                       getData={this.swapiService.getPerson}
                       getImageUrl={this.swapiService.getPersonImage} />
        </div>
      </div>
      <div className="row mt-3 body-block">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getAllPlanets}
                    renderItem={(item)=> (<><span>{item.name}</span><em> ({item.diameter})</em></>)} />
        </div>
      </div>
      <div className="row mt-3 body-block">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected}
                    getData={this.swapiService.getAllStarships}
                    renderItem={(item)=> `${item.name} (${item.model})`} />
        </div>
      </div>
    </div>
  );}
};