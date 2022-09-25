import React from 'react';
import HiyaloLogo from '../../images/hiyalo-logo.svg';
import './page-loader.css';

const PageLoader = () => {
  return (
    <body className='page-loader-body'>
      <div class="page-loader">
        <div class="page-loader-2">
          <img src={HiyaloLogo} alt="" />
        </div>
      </div>
    </body>
  );
};

export default PageLoader;
