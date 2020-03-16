import React from 'react';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';
import withSwapiService from '../hoc/withSwapiService';

const PlanetDetails = (props)=> {
    return(
        <ItemDetails {...props} >
            <Record field="name" label="Name" />
            <Record field="diameter" label="Diameter" />
            <Record field="population" label="Population" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService)=> {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);