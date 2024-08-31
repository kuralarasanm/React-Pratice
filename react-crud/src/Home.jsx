// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Home = () => {
//     const [data, setData] = useState([])
//     const navigate = useNavigate()

//     useEffect(() => {
//         axios.get('http://localhost:3500/users')
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));

//     }, [])

//     const handleDelete = (id) => {
//         axios.delete(`http://localhost:3000/users/${id}`)
//             .then(() => {
//                 // Remove the deleted item from the state
//                 setData(data.filter(user => user.id !== id));
//                 // Optionally, you can show a notification or redirect
//                 console.log('User deleted successfully');
//             })
//             .catch(err => console.log(err));
//     };
//     return (
//         <div className='container'>
//             <h2>Crud App with JSON Server</h2>
//             <Link to="/create" className='btn btn-success my-3'>Create +</Link>
//             <table className='table table-hover table-sm'>
//                 <thead>
//                     <tr className='table-info'>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                      {data.map((user, index) => (
//                         <tr key={index}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>
//                                 <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary'>Update</Link>
//                                 <button className='btn btn-sm btn-danger ms-2' onClick={() => handleDelete(user.id)}>
//                                     Delete
//                                 </button>
//                                 <Link to={`/read/${user.id}`} className='text-decoration-none btn btn-sm btn-primary'>Read</Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3500/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3500/users/${id}`)
            .then(() => {
                // Remove the deleted item from the state
                setData(data.filter(user => user.id !== id));
                console.log('User deleted successfully');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='container'>
            <h2>Crud App with JSON Server</h2>
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
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary'>Update</Link>
                                <button className='btn btn-sm btn-danger ms-2' onClick={() => handleDelete(user.id)}>
                                    Delete
                                </button>
                                <Link to={`/read/${user.id}`} className='text-decoration-none btn btn-sm btn-primary ms-2'>Read</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
