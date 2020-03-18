import React from 'react';
import {StarshipList} from '../sw-components/allItemLists';
import {withRouter} from 'react-router-dom';

const StarshipPage = ({history})=> {

    return(
        <div className="row mt-3 body-block">
            <div className="col-md-6">
                <StarshipList onItemSelected={(itemId)=>history.push(itemId)} />
            </div>
        </div>
    );
};

export default withRouter(StarshipPage);