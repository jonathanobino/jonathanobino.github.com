import React from 'react';

const FullScreen = ({ background, children }) => {
  const style = {
    background,
  };
  return (
    <div className="full" style={style}>
      {children}
    </div>
  );
};

export default FullScreen;
