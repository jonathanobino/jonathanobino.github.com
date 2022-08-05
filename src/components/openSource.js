import React, { useState, useEffect } from 'react';
import useIsInViewport from 'lazy-react';
import Loading from '../components/Loading';
import GitHub from '../components/githubRepo';

const projects = [
  {
    endpoint: 'https://api.github.com/repos/jonathanobino/react-lazy',
  },
  {
    endpoint: 'https://api.github.com/repos/jonathanobino/rately',
  },
];

export default function OpenSource() {
  const [results, setResults] = useState([]);

  const [setRef, link, isVisible] = useIsInViewport({ offset: 200 });

  useEffect(() => {
    if (isVisible) {
      Promise.all(
        projects.map((elem) => {
          return fetch(elem.endpoint).then((res) => res.json());
        })
      ).then((values) => {
        setResults(values);
      });
    }
  }, [isVisible]);

  return (
    <div className="row main" ref={(node) => setRef(node)}>
      <div className="medium-2 large-2 columns text-right">
        <h2>Open Source Projects</h2>
      </div>
      <div className="medium-10 large-10 columns spaceBetween">
        {results.length === 0 ? (
          <Loading />
        ) : (
          results.map((elem, index) => <GitHub {...elem} key={index} />)
        )}
      </div>
    </div>
  );
}
