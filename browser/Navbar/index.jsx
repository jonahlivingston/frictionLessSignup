import React from 'react'; 
import {Link} from 'react-router';

const Navbar = (props) => {
  const createClass = props.highlighted==='create' ? 'highlighted' : '';
  const previewClass = props.highlighted==='preview' ? 'highlighted' : '';
  const exportClass = props.highlighted==='export' ? 'highlighted' : '';

  return(
    <nav id = "navbar">
      <Link to='/'>
        <div className = {`nav-button ${createClass}`}>
          <h1 className="navtext">Create</h1>
        </div>
      </Link>
      <Link to='/preview'>
        <div className = {`nav-button ${previewClass}`}>
          <h1 className="navtext">Preview</h1>
        </div>
      </Link>
      <Link to='/export'>
        <div className = {`nav-button ${exportClass}`}>
          <h1 className="navtext">Export</h1>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar;
