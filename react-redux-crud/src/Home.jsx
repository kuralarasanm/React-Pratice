
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

const Home = () => {
    const users = useSelector((state) => state.users);
    console.log(users);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }));
    };

    return (
        <div className='container'>
            <h2>Crud App with JSON Server - Redux</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className='table table-hover table-sm'>
                <thead>
                    <tr className='table-info'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}> {/* Use user.id for unique key */}
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button
                                    onClick={() => handleDelete(user.id)} // Pass user.id to handleDelete
                                    className='btn btn-sm btn-danger ms-2'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;

