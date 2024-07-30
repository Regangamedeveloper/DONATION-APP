import React from 'react';
import './adminfooter.scss';

const Adminfooter = () => {
  return (
    <div className="adminfooter">
        <span>ADRA Uganda.</span>
        <span>© {new Date().getFullYear()}  All rights reserved.</span>
    </div>
  );
}

export default Adminfooter;  