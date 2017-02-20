import React from 'react';
import './dropdown';

const dropdown = props => {
  return (
    <div tabindex="0" className="onclick-menu">
      <ul className="onclick-menu-content">
        {props.children}
      </ul>
    </div>
  );
};

dropdown.propTypes = {};

export default dropdown;