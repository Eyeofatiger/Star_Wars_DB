import React from 'react';
import {PersonList} from '../sw-components/allItemLists';
import PersonDetails from '../sw-components/PersonDetails';
import {withRouter} from 'react-router-dom';

const PeoplePage = ({match, history})=> {
    const { id } = match.params;

    return(
        <div className="row mt-3 body-block">
        <div className="col-md-6">
            <PersonList onItemSelected={(id)=> history.push(id)} />
        </div>
        <div className="col-md-6">
            <PersonDetails itemId={id} />
        </div>
        </div>
    );
};

export default withRouter(PeoplePage);