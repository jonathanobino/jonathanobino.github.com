import React from 'react';
import { LazyBackgroundImage as LazyImage } from 'lazy-react';

const PortfolioItem = ({ item }) => {
  let image = item.imageSrc ? (
    <LazyImage link={item.imageSrc} className="imgWrapper" offset={200} />
  ) : (
    <div className="imgWrapper hide-sm"></div>
  );
  let technology = item.description.technology ? (
    <p>
      <span className="sans">Technology Involved</span>{' '}
      {item.description.technology}
    </p>
  ) : null;
  return (
    <div className="row careerItem">
      <div className="large-9 medium-8 small-9 columns description">
        <p>
          <span className="sans">Company</span>{' '}
          <strong>{item.description.company}</strong>
        </p>
        <p>
          <span className="sans">Role</span> {item.description.role}
        </p>
        <p>
          <span className="sans">When</span> {item.description.when}
        </p>
      </div>
      <div className="large-3 medium-4 small-3 columns">
        <a href={item.link} target="_blank">
          {image}
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
