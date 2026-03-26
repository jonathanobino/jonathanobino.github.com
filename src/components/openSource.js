import useIsInViewport from "lazy-react";
import { useContext, useEffect, useState } from "react";
import { ActiveSectionContext } from "../API/ActiveSectionContext";
import { default as useViewPort } from "../API/useIsInViewport";
import Loading from "../components/Loading";
import GitHub from "../components/githubRepo";

const projects = [
  {
    endpoint: "https://api.github.com/repos/jonathanobino/react-lazy",
  },
  // {
  //   endpoint: 'https://api.github.com/repos/jonathanobino/rately',
  // },
];

export default function OpenSource() {
  const [results, setResults] = useState([]);

  const [setRef, _, isVisible] = useIsInViewport({ offset: 200 });
  const [setRefViewport, isInViewPort] = useViewPort();
  const { setActiveSection } = useContext(ActiveSectionContext);

  useEffect(() => {
    if (isInViewPort) setActiveSection("projects");
  }, [isInViewPort, setActiveSection]);

  useEffect(() => {
    if (isVisible) {
      Promise.all(
        projects.map((elem) => {
          return fetch(elem.endpoint).then((res) => res.json());
        }),
      ).then((values) => {
        console.log("values", values);
        setResults(values);
      });
    }
  }, [isVisible]);

  return (
    <div
      className="row main"
      id="projects"
      ref={(node) => {
        setRef(node);
        setRefViewport(node);
      }}
    >
      <h2>03. Projects</h2>
      <div className="columns spaceBetween">
        {results.length === 0 ? (
          <Loading />
        ) : (
          results.map((elem) => (
            <GitHub {...elem} key={`${elem.name}-${elem.owner}`} />
          ))
        )}
      </div>
    </div>
  );
}
