import React from 'react';

import './ContentHeader.css';


function ContentHeader({section, title}) {
  return (
    <header className="content-header">
      <div className="g-row g-cont">
        <div className="g-col">
          <h1 className="content-header__title">{title}</h1>
        </div>
      </div>
    </header>
  );
}


export default ContentHeader;
