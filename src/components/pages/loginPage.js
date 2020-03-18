import React from 'react';
import {Redirect} from 'react-router-dom';

const LoginPage = ({isLoggedIn, onLogin})=> {
    if(isLoggedIn){
        return <Redirect to="/" />
    }

    return(
        <div className="jumbotron w-50 m-auto">
            <h4>Login to see secret page!</h4>
            <button className="btn btn-primary"
                    onClick={onLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginPage;