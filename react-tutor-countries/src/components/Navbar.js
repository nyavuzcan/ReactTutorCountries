import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = () => {
    //Higher Order Functions

    // function toConsole(str1) {
    //     return function (str2){
    //         console.log(str1+' '+str2)
    //     }
    // }
    // const selamla = toConsole('Merhaba');
    // selamla('Ali')
    
    
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Ülkeler</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Ana Sayfa</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Hakkında</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">İletişim</Link>
      </li>
 
    </ul>
  </div>
</nav>
)

}

export default withRouter(Navbar);