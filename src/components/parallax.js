import React, { useEffect, useRef } from 'react';

export default function({children, background}) {

  const wrapper = useRef(undefined);
  const scrollHandler = (wrapper) => {
    const parallax = wrapper.querySelector('.parallax');
    return () => {
      const { height, top, bottom } = wrapper.getBoundingClientRect();
      let translate = parseInt((top*-1)/3);
      window.requestAnimationFrame(() => {
        parallax.style.transform = `translate3d(0px,${translate}px,0px) scale(1.1,1.1)`;
      });
    }
  }

  useEffect(()=>{
    if(wrapper.current){
      window.addEventListener('scroll', scrollHandler(wrapper.current));
      return window.removeEventListener('scroll', scrollHandler(wrapper.current));
    }
  }, [wrapper]);

  return (
    <div className="wrapper" ref={wrapper}>
      <div style={{
        background,
      }}
      className="parallax"/>
      <div className="container">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}
