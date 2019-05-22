import React from 'react';
import { Link } from 'react-router-dom';
import egg from "../img/broken-egg.png"

const PageNotFound = () => (
  <div className="notFound">
    <img id="egg404" src={egg} alt="not found" />
    <p>
    <strong>OOPS, Broken <strike>Egg</strike> Link</strong>
    <br />
    Find your way <Link to='/'>home</Link>.
    </p>
  </div>
)
export default PageNotFound
