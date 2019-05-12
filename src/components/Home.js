import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="homepage">
    <h1>This is the home page</h1>
    <Link to='/my-credenza'><button className="btn1">My Credenza</button></Link>
    <br />
    <Link to='/favourites'><button className="btn2">My Favourite Items</button></Link>
  </div>
)
export default Home
