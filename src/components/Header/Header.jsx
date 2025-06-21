// import { Link } from "react-router-dom";
// import './Header.css'

// const Header = () => {
//   return (
//     <div className="Header1">
//     <header className="site-header">
//       <div className="brand"><h1>Vivekanand College</h1></div>
//       <nav className="nav-links">
//         <Link to="/home">Home</Link>
//         <Link to="/about"> About</Link>
//         <Link to="/courses"> Courses</Link>
//         <Link to="/contact"> Contact</Link>
//         <Link to="/admission" className="apply-btn"> Apply Now!</Link>
//       </nav>
//     </header>
//     </div>
//   );
// };

// export default Header;
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header1">
    <header className="site-header">
      <div className="brand">
       Vivekanand College
        </div>
      <nav className="nav-links">
        <Link to="/home" className="Links">Home</Link>
        <Link to="/about" className="Links"> About</Link>
        <Link to="/courses" className="Links"> Courses</Link>
        <Link to="/contact" className="Links"> Contact</Link>
        <Link to="/admission" className="apply-btn" > Apply Now!</Link>
      </nav>
    </header>
    </div>
  );
};

export default Header;