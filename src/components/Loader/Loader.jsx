import React from 'react';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <div className={s.loader}>
        <div className={s.spinner}></div>
        <span className={s.blink}>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
