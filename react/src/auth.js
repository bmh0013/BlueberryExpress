import React from 'react';

const setToken = (e) => {
    if(e.origin && e.data && e.data.command === 'token-ready' && e.data.info && e.data.info.token ) {
        console.log('message recieved');
        localStorage.setItem('jwt', e.data.info.token);
        e.source.postMessage(
            {
                command: 'info',
                info: {
                    complete: true,
                },
            },
            e.origin
        );
        window.location = '/';
    }
};


export const login = () => {
    console.log('Logging in');
    window.addEventListener('message', setToken, false);
    window.open(`${process.env.API_URL}auth/google`);
    //window.location = '/';
}

export const logout = () => {
    localStorage.removeItem('jwt');
    window.location = '/';
}

export const AuthContext = React.createContext();

export const openPaths = [
    '/',
    '/signup',
    '/aboutus',
    '/login'
]