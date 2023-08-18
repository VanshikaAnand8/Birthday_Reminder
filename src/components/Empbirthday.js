import React from 'react'
import {Link} from "react-router-dom";
import data from '../components/data';
import Empdata from './Empdata';


const Empbirthday = () => {
  return (
    <div className='container'>
      <h3>Today Birthday</h3>
      <Empdata employee = {data} />
      <Link to="/empdetails">Employee Details</Link>
    </div>
  )
}

export default Empbirthday
