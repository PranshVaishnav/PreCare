import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from './Component/Login/login';
import LogoutButton from './Component/Logout/logout';

import "./index.css"

function App() {
    const { user, isAuthenticated, isLoading } = useAuth0();






    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("/members")
    //         .then(
    //             (res) => res.json()
    //         )
    //         .then(
    //             (res) => {
    //                 setData(res.members)
    //             })
    // }, []);

    return (
        <>
            {isAuthenticated ?
                <LogoutButton /> : <LoginButton />
            }
            {isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}

        </>

    )
}

export default App