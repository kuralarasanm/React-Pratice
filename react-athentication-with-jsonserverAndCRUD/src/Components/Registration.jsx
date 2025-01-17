import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Registration = () => {
	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		email: '',
		password: '',
		cpassword: ''
	})
	const [errors, setErrors] = useState({})
	const [valid, setValid] = useState(true)
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		let isvalid = true; 
		let validationErrors = {}
		if(formData.fname === "" || formData.fname === null) {
			isvalid = false;
			validationErrors.fname = "First name required; "
		}
		if(formData.lname === "" || formData.lname === null) {
			isvalid = false;
			validationErrors.lname = "Last name required; "
		}
		if(formData.email === "" || formData.email === null) {
			isvalid = false;
			validationErrors.email = "Email required; "
		} else if(!/\S+@\S+\.\S+/.test(formData.email)) {
			isvalid = false;
			validationErrors.email = "Email is not valid; "
		}

		if(formData.password === "" || formData.password === null) {
			isvalid = false;
			validationErrors.password = "password required; "
		} else if(formData.password.length < 6) {
			isvalid = false;
			validationErrors.password = "password length at least 6 char; "
		}

		if(formData.cpassword !== formData.password) {
			isvalid = false;
			validationErrors.cpassword = "c password not match; "
		}
		setErrors(validationErrors)
		setValid(isvalid)

		if(Object.keys(validationErrors).length === 0) {
			axios.post('http://localhost:4000/users', formData)
			.then(result => {
				alert("Registered Successfully")
				navigate('/login')
			})
			.catch(err => console.log(err))
		}
		
	}
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="signup-form">
            <form class="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
              <h4 class="mb-5 text-secondary">Create Your Account</h4>
			  {
				valid ? <></> :
				<span className="text-danger">
					{errors.fname} {errors.lname} {errors.email} 
					{errors.password} {errors.cpassword}
				</span>
			}
              <div class="row">
				{/* First name  */} 
                <div class="mb-3 col-md-6">
                  <label>
                    First Name<span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    class="form-control"
                    placeholder="Enter First Name"
					onChange={(event) => setFormData({...formData, fname: event.target.value}) }
                  />
                </div>
				{/* Last Name  */}
                <div class="mb-3 col-md-6">
                  <label>
                    Last Name<span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="Lname"
                    class="form-control"
                    placeholder="Enter Last Name"
					onChange={(event) => setFormData({...formData, lname: event.target.value}) }
                  />
                </div>
				{/* Email  */}
				<div class="mb-3 col-md-12">
                  <label>
                    Email<span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="emial"
                    class="form-control"
                    placeholder="Enter Email"
					autoComplete="off"
					onChange={(event) => setFormData({...formData, email: event.target.value}) }
                  />
                </div>
				{/* Password  */}

                <div class="mb-3 col-md-12">
                  <label>
                    Password<span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
					onChange={(event) => setFormData({...formData, password: event.target.value}) }
                  />
                </div>
                <div class="mb-3 col-md-12">
                  <label>
                    Confirm Password<span class="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    class="form-control"
                    placeholder="Confirm Password"
					onChange={(event) => setFormData({...formData, cpassword: event.target.value}) }
                  />
                </div>
                <div class="col-md-12">
                  <button class="btn btn-primary float-end">Signup Now</button>
                </div>
              </div>
            </form>
            <p class="text-center mt-3 text-secondary">
              If you have account, Please <Link to="/login">Login Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     password: '',
//     cpassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [valid, setValid] = useState(true);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let isValid = true;
//     let validationErrors = {};

//     if (!formData.fname) {
//       isValid = false;
//       validationErrors.fname = "First name required.";
//     }
//     if (!formData.lname) {
//       isValid = false;
//       validationErrors.lname = "Last name required.";
//     }
//     if (!formData.email) {
//       isValid = false;
//       validationErrors.email = "Email required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       isValid = false;
//       validationErrors.email = "Email is not valid.";
//     }
//     if (!formData.password) {
//       isValid = false;
//       validationErrors.password = "Password required.";
//     } else if (formData.password.length < 6) {
//       isValid = false;
//       validationErrors.password = "Password must be at least 6 characters.";
//     }
//     if (formData.cpassword !== formData.password) {
//       isValid = false;
//       validationErrors.cpassword = "Passwords do not match.";
//     }

//     if (isValid) {
//       try {
//         await axios.post('http://localhost:8000/users', formData);
//         alert("Registered Successfully");
//         navigate('/login');
//       } catch (err) {
//         console.error(err);
//       }
//     } else {
//       setErrors(validationErrors);
//       setValid(isValid);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="signup-form">
//             <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
//               <h4 className="mb-5 text-secondary">Create Your Account</h4>
//               {!valid && (
//                 <div className="text-danger mb-3">
//                   {errors.fname && <div>{errors.fname}</div>}
//                   {errors.lname && <div>{errors.lname}</div>}
//                   {errors.email && <div>{errors.email}</div>}
//                   {errors.password && <div>{errors.password}</div>}
//                   {errors.cpassword && <div>{errors.cpassword}</div>}
//                 </div>
//               )}
//               <div className="row">
//                 {/* First Name */}
//                 <div className="mb-3 col-md-6">
//                   <label>
//                     First Name<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="fname"
//                     className="form-control"
//                     placeholder="Enter First Name"
//                     value={formData.fname}
//                     onChange={(event) => setFormData({ ...formData, fname: event.target.value })}
//                   />
//                 </div>
//                 {/* Last Name */}
//                 <div className="mb-3 col-md-6">
//                   <label>
//                     Last Name<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="lname"
//                     className="form-control"
//                     placeholder="Enter Last Name"
//                     value={formData.lname}
//                     onChange={(event) => setFormData({ ...formData, lname: event.target.value })}
//                   />
//                 </div>
//                 {/* Email */}
//                 <div className="mb-3 col-md-12">
//                   <label>
//                     Email<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     placeholder="Enter Email"
//                     autoComplete="off"
//                     value={formData.email}
//                     onChange={(event) => setFormData({ ...formData, email: event.target.value })}
//                   />
//                 </div>
//                 {/* Password */}
//                 <div className="mb-3 col-md-12">
//                   <label>
//                     Password<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control"
//                     placeholder="Enter Password"
//                     value={formData.password}
//                     onChange={(event) => setFormData({ ...formData, password: event.target.value })}
//                   />
//                 </div>
//                 {/* Confirm Password */}
//                 <div className="mb-3 col-md-12">
//                   <label>
//                     Confirm Password<span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     name="cpassword"
//                     className="form-control"
//                     placeholder="Confirm Password"
//                     value={formData.cpassword}
//                     onChange={(event) => setFormData({ ...formData, cpassword: event.target.value })}
//                   />
//                 </div>
//                 <div className="col-md-12">
//                   <button className="btn btn-primary float-end" type="submit">
//                     Signup Now
//                   </button>
//                 </div>
//               </div>
//             </form>
//             <p className="text-center mt-3 text-secondary">
//               If you have an account, please <Link to="/login">Login Now</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;