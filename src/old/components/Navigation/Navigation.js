import React from 'react';
import locations from '../../constants/locations'
import './Navigation.css'

const Navigation = ({location, setLocation}) => (
  <div className="navigation">
    <ul>
      <li className={location === locations.WORK ? 'active' : ''}>
        <button onClick={()=>setLocation(locations.WORK)}>
          Work
        </button>
      </li>

      <li className={location === locations.BLOG ? 'active' : ''}>
        <button onClick={()=>setLocation(locations.BLOG)}>
          Blog
        </button>
      </li>

      <li className={location === locations.ABOUT ? 'active' : ''}>
        <button onClick={()=>setLocation(locations.ABOUT)}>
          About
        </button>
      </li>
    </ul>
  </div>
);

export default Navigation;
