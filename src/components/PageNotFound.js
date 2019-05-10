import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    404, Page Not Found.
    <br />
    Go <Link to='/'>back home</Link>.
  </div>
)
export default PageNotFound
