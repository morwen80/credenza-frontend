import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="homepage">
    <h1>This is the home page</h1>
    <Link to='/my-credenza'><button className="btn1">Your Credenza</button></Link>
    <br />
    <button className="btn2">Grocery List</button>
  </div>
)
export default Home
