import React, { useMemo } from 'react';
import { LazyFrame } from 'lazy-react';

const pens = [
  'VedwMz', // product card
  'yeqgvr', // music ui
  'ZWpjzR', // weather dashboard
  'obwBEz', // twitter hearth animation
];

function mapIdsToFrame(array) {
  return array.map((elem) => ({
    id: elem,
    link:
      '//codepen.io/jonathanobino/embed/preview/' +
      elem +
      '/?height=268&theme-id=0&default-tab=result',
  }));
}

export default function () {
  const mapped = useMemo(() => {
    return mapIdsToFrame(pens);
  }, [pens]);

  return (
    <div className="row main">
      <div className="medium-2 large-2 columns text-right">
        <h2>My Popular Pens</h2>
      </div>
      <div className="medium-10 large-10 columns spaceBetween">
        {mapped.map((elem, index) => {
          return (
            <LazyFrame
              key={elem.id}
              link={elem.link}
              height={268}
              style={{ maxWidth: '100%', marginBottom: '10px' }}
              offset={200}
            />
          );
        })}
      </div>
    </div>
  );
}
