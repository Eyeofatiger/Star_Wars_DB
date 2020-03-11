import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import './ItemList.css';

export default class ItemList extends Component {
  constructor(){
    super();

    this.state = {
      peopleList: null,
      error: false,
      loading: true
    };

    this.swapiService = new SwapiService();
  };

  componentDidMount(){
    this.swapiService.getAllPeople()
        .then((peopleList)=> {
          this.setState({
            peopleList
          });
        }).catch(this.onError);
  };

  onError = (err)=> {
    this.setState({
      error: true,
      loading: false
    });
  };

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Darth Vader
        </li>
        <li className="list-group-item">
          R2-D2
        </li>
      </ul>
    );
  }
}