import React from 'react';

const Section = ({ background, children, isRow }) => {
  return (
    <div className="panel" style={{ background }}>
      <div className={isRow ? 'row' : ''}>{children}</div>
    </div>
  );
};

export default Section;
