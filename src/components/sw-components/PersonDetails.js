import React from 'react';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';
import withSwapiService from '../hoc/withSwapiService';

const PersonDetails = (props)=> {
    return(
        <ItemDetails {...props} >

            <Record field="name" label="Name" />
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye color" />
            <Record field="height" label="Height" />
        </ItemDetails>
    );          
};

const mapMethodsToProps = (swapiService)=> {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);