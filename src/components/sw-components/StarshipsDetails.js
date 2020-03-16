import React from 'react';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';
import withSwapiService from '../hoc/withSwapiService';

const StarshipDetails = (props)=> {
    return(
        <ItemDetails {...props} >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
            <Record field="passengers" label="Passengers" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService)=> {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);