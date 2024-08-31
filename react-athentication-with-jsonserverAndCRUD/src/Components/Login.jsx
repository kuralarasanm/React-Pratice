// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";


// const Login = () => {

//   const [formData, setFormData] = useState({
// 		email: '',
// 		password: '',
// 	})
//   const [errors, setErrors] = useState({})
// 	const [valid, setValid] = useState(true)
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
// 		e.preventDefault();
// 		let isvalid = true; 
// 		let validationErrors = {}

// 		if(formData.email === "" || formData.email === null) {
// 			isvalid = false;
// 			validationErrors.email = "Email required; "
// 		} else if(!/\S+@\S+\.\S+/.test(formData.email)) {
// 			isvalid = false;
// 			validationErrors.email = "Email is not valid; "
// 		}

// 		if(formData.password === "" || formData.password === null) {
// 			isvalid = false;
// 			validationErrors.password = "password required; "
// 		} else if(formData.password.length < 6) {
// 			isvalid = false;
// 			validationErrors.password = "password length at least 6 char; "
// 		}

//     axios.get('http://localhost:8000/users')
//     .then(result => {
//       result.data.map(user => {
//         if(user.email === formData.email) {
//           if(user.password === formData.password) {
//             alert("Login successfuly")
//             navigate('/')
//           } else {
//             isvalid = false;
//             validationErrors.password = "Wrong Password; "
//           }
//         }
//       })
//       setErrors(validationErrors)
// 		  setValid(isvalid)
//     })
//     .catch(err => console.log(err))
		
// 	}

//   return (
//     <div class="container">
//       <div class="row">
//         <div class="col-md-6 offset-md-3">
//           <div class="signup-form">
//             <form
//               class="mt-5 border p-4 bg-light shadow"
//               onSubmit={handleSubmit}
//             >
//               <h4 class="mb-5 text-secondary">Create Your Account</h4>
//               {valid ? (
//                 <></>
//               ) : (
//                 <span className="text-danger">
//                   {errors.fname} {errors.lname} {errors.email}
//                   {errors.password} {errors.cpassword}
//                 </span>
//               )}
//               <div class="row">
//                 {/* Email  */}
//                 <div class="mb-3 col-md-12">
//                   <label>
//                     Email<span class="text-danger">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="emial"
//                     class="form-control"
//                     placeholder="Enter Email"
//                     autoComplete="off"
//                     onChange={(event) =>
//                       setFormData({ ...formData, email: event.target.value })
//                     }
//                   />
//                 </div>
//                 {/* Password  */}

//                 <div class="mb-3 col-md-12">
//                   <label>
//                     Password<span class="text-danger">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     class="form-control"
//                     placeholder="Enter Password"
//                     onChange={(event) =>
//                       setFormData({ ...formData, password: event.target.value })
//                     }
//                   />
//                 </div>

//                 <div class="col-md-12">
//                   <button class="btn btn-primary float-end">Login Now</button>
//                 </div>
//               </div>
//             </form>
//             <p class="text-center mt-3 text-secondary">
//               If you don't have account, Please <Link to="/registration">Registration</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (!formData.email) {
      isvalid = false;
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid.";
    }

    if (!formData.password) {
      isvalid = false;
      validationErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "Password must be at least 6 characters long.";
    }

    if (isvalid) {
      try {
        const result = await axios.get('http://localhost:4000/users');
        const user = result.data.find(user => user.email === formData.email);
        if (user) {
          if (user.password === formData.password) {
            alert("Login successful");
            navigate('/');
          } else {
            validationErrors.password = "Incorrect password.";
            isvalid = false;
          }
        } else {
          validationErrors.email = "Email not found.";
          isvalid = false;
        }
        setErrors(validationErrors);
        setValid(isvalid);
      } catch (err) {
        console.error(err);
      }
    } else {
      setErrors(validationErrors);
      setValid(isvalid);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="signup-form">
            <form
              className="mt-5 border p-4 bg-light shadow"
              onSubmit={handleSubmit}
            >
              <h4 className="mb-5 text-secondary">Login</h4>
              {!valid && (
                <div className="text-danger mb-3">
                  {errors.email && <div>{errors.email}</div>}
                  {errors.password && <div>{errors.password}</div>}
                </div>
              )}
              <div className="row">
                {/* Email */}
                <div className="mb-3 col-md-12">
                  <label>
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    autoComplete="off"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                  />
                </div>
                {/* Password */}
                <div className="mb-3 col-md-12">
                  <label>
                    Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary float-end" type="submit">
                    Login Now
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
              If you don't have an account, please <Link to="/registration">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
