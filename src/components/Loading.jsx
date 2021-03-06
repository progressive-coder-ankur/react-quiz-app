import React from 'react';

const Loading = () => {
  return (
    <div className='loading'>
      {/* <svg viewBox='-2000 -1000 4000 2000'>
            <path
              id='inf'
              d='M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z'
            ></path>
            <use
              xlinkHref='#inf'
              strokeDasharray='1570 5143'
              strokeDashoffset='6713px'
            ></use>
          </svg> */}
      <div class='preloader'>
        <div class='preloader__square'></div>
        <div class='preloader__square'></div>
        <div class='preloader__square'></div>
        <div class='preloader__square'></div>
      </div>
      <div class='status'>
        Loading<span class='status__dot'>.</span>
        <span class='status__dot'>.</span>
        <span class='status__dot'>.</span>
      </div>
    </div>
  );
};

export default Loading;
