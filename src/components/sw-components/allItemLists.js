import React from 'react';
import ItemList from '../itemList/ItemList';
import withData from '../hoc/withData';
import SwapiService from '../../services/swapiService';

const swapiService = new SwapiService();
const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const withChildFunction = (Wrapped, func)=> {
    return (props)=>{
        return (<Wrapped {...props} renderItem={func} />);
    };
};

const ListWithChildFunction = withChildFunction(ItemList,
        ({name})=><span>{name}</span>);

const PersonList = withData(ListWithChildFunction, getAllPeople);
const PlanetList = withData(ListWithChildFunction, getAllPlanets);
const StarshipList = withData(ListWithChildFunction, getAllStarships);

export{
    PersonList,
    PlanetList,
    StarshipList
};