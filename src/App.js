import React from "react";
import {Link} from 'react-router-dom'
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Main />
      </div>
      <div className="fixed-action-btn">
        <Link to='/meetups/add' className="btn-floating btn-large waves-effect waves-light red">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
}
