import React, { useState } from 'react';
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users || []);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if users array is empty or undefined
        // const newId = users.length ? users[users.length - 1].id + 1 : 1;
        // dispatch(addUser({ id: newId, name, email }));
        //or
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Name:</label>
                        <input
                            type="text"
                            id="name"
                            className='form-control'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input
                            type="email"
                            id="email"
                            className='form-control'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
