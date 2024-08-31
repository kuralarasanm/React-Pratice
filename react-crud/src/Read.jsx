import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Read = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3500/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className='container'>
            <h2>User Details</h2>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>Name: {user.name}</h5>
                    <p className='card-text'>Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Read;
