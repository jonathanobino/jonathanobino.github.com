import React from 'react';

export default function ({ children, beforeScroll, target }) {
  function clickHandler() {
    const targetPosition =
      document.querySelector(target).getBoundingClientRect().top + 1;
    if (typeof beforeScroll == 'function') {
      beforeScroll().then(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      });
    } else {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  return <div onClick={clickHandler}>{children}</div>;
}
