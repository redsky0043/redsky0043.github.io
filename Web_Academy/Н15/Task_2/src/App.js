import React from 'react';
import { Redirect } from "react-router-dom";

localStorage.setItem('authorized', 'false');

const login = () => {
    localStorage.setItem('authorized', 'true');
}

const logout = () => {
    localStorage.setItem('authorized', 'false');
}

export class Content extends React.Component{
    render(){
        if(localStorage.getItem('authorized') === 'true') 
        
            return (  
                <div className='main' >
                    <h2> 
                        This is content page
                    </h2>
                    <button onClick={logout} className='btn' >
                        Logout
                    </button>      
                </div>
            )
                    
        return <Redirect to="/login" />;
    }
}

export class Login extends React.Component{
    render(){
        if(localStorage.getItem('authorized') === 'false') {
            return (
                <div className='main' >
                    <h2>
                        Login page
                    </h2>
                    <button onClick={login} className='btn' >
                        authorized
                    </button>
                </div>
            )
        }

        return <Redirect to="/content" />;
    }
}