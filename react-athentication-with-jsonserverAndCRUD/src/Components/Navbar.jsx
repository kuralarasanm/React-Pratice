// import React from "react";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'

// const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <div class="container-fluid">
//         <Link class="navbar-brand" to="/">
//           Navbar
//         </Link>
        
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <form class="d-flex">
//             <Link to="/registration" className=""> Registration
//             </Link>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="d-flex">
            <Link to="/registration" className="btn btn-primary">
              Registration
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
