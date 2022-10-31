import React, { useEffect, useState } from 'react'

import "./index.css"

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/members")
            .then(
                (res) => res.json()
            )
            .then(
                (res) => {
                    setData(res.members)
                })
    }, []);

    return (

        <div>
            <p>Hello</p>

            {
                data.map((val) => {
                    return (<p>{val}</p>)
                })
            }

        </div>
    )
}

export default App