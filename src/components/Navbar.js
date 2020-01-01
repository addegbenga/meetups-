import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className='blue darken-3'>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo center'>
              Meetupzz
            </Link>
            <Link to='/'
              data-target='main-menu'
              className='sidenav-trigger  show-on-large'>
              <i className='fa fa-bars'></i>
            </Link>
            <ul className='right hide-on-small-only'>
              <li>
                <Link to='/'>
                  <i className='fa fa-users' style={{ marginRight: "5px" }}></i>
                  Meetups
                </Link>
              </li>
            </ul>
            <ul className='sidenav' style={{width:'500px'}} id='main-menu'>
              <li>
                <Link to='/'>
                  <i className='fa fa-users'></i>
                  Meetups
                </Link>
              </li>
              <li>
                <Link to='/meetups/add'>
                  <i className='fa fa-plus'></i>
                  Add Meetup
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  <i className='fa fa-question-circle'></i>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
