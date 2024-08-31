// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const Update = () => {
//     const { id } = useParams()
//     const [values, setValues] = useState({
//         id: id,
//         name: '',
//         email: ''
//     });
//     useEffect(() => {
//         axios.get('http://localhost:3500/users' + id)
//             .then(res => {
//                 console.log(res)
//                 setValues({ ...values, name: res.data.name, email: res.data.email })
//             })
//             .catch(err => console.log(err));
//     }, []);
// const navigate=useNavigate()
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.put('http://localhost:3500/users' + id, values)
//             .then(res => {
//                 navigate('/')
//             })
//             .catch(err => console.log(err));
//     }
//     return (
//         <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
//             <div className='w-50 border bg-secondary text-white p-5'>
//                 <h3>Update User</h3>
//                 <form action="" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" name='name' className='form-control' placeholder='enter name'
//                             value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email:</label>
//                         <input type="email" name='email' className='form-control' placeholder='enter email'
//                             value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
//                     </div><br />
//                     <button className='btn btn-info'>Update</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Update;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
        id: id,
        name: '',
        email: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3500/users/${id}`)
            .then(res => {
                setValues({ ...values, name: res.data.name, email: res.data.email });
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3500/users/${id}`, values)
            .then(() => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            name='name' 
                            className='form-control' 
                            placeholder='Enter name'
                            value={values.name} 
                            onChange={e => setValues({ ...values, name: e.target.value })} 
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name='email' 
                            className='form-control' 
                            placeholder='Enter email'
                            value={values.email} 
                            onChange={e => setValues({ ...values, email: e.target.value })} 
                        />
                    </div><br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
