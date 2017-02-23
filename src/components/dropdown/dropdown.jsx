import React from 'react';
import './dropdown.scss';

const dropdown = props => {
  return (
    <div tabIndex="0" className="onclick-menu dropdown">
      <ul className="onclick-menu-content">
        {props.children}
      </ul>
    </div>
  );
};

dropdown.propTypes = {};

export default dropdown;