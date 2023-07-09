import React from 'react';

const page = async({ params }) => {
    const id = params.id;

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e9f7a72db8mshd5ffa58560bed95p13c2b6jsnfe3efbc2a744',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data= 

    return (
        <>
            <h1>{id}</h1>
        </>
    );
};

export default page;