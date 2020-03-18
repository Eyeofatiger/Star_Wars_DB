import React, {useState} from 'react';
import {PlanetList} from '../sw-components/allItemLists';
import PlanetDetails from '../sw-components/PlanetDetails';

const PlanetPage = ()=> {
    
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    return(
        <div className="row mt-3 body-block">
            <div className="col-md-6">
                <PlanetList onItemSelected={(id)=>setSelectedPlanet(id)} />
            </div>
            <div className="col-md-6">
                <PlanetDetails itemId={selectedPlanet} />
            </div>
        </div>
    );
};

export default PlanetPage;