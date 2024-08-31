// import React from "react";
// import Logo from '../assets/Images/Sabzi.png'
// import 'bootstrap-icons/font/bootstrap-icons.css'

// const Navbar = () => {
//   return (
//     <div className="container-fluid px-5 header sticky-top">
//       <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
//         <a
//           href="/"
//           className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
//         >
//             <img src={Logo} alt=""/>
//         </a>

//         <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
//           <li>
//             <a href="#" className="nav-link px-2 menu-color">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link px-2 menu-color">
//               Products
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link px-2 menu-color">
//               About
//             </a>
//           </li>
//         </ul>

//         <div className="col-md-3 text-end">
//           <i className="bi bi-search fs-3 me-4 text-success"></i>
//           <i className="bi bi-cart fs-3 text-success">o</i>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import Logo from '../assets/Images/Sabzi.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCart } from '../CartContext'; // Import the custom hook

const Navbar = () => {
  const { cartCount } = useCart(); // Use the custom hook

  return (
    <div className="container-fluid px-5 header sticky-top">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={Logo} alt="" />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 menu-color me-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color me-4">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              About
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
        <input type="text" aria-label="First name" class="form-control" placeholder="search"/>
          <i className="bi bi-search fs-3 me-4 text-success"></i>
          <div className="position-relative d-inline-block">
            <i className="bi bi-cart fs-3 text-success">{cartCount}</i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
                <span className="visually-hidden">items in cart</span>
              </span>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
