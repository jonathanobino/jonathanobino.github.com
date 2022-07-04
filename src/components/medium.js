import React, { Component} from 'react';

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div className="row main">
        <div className="medium-2 large-2 columns text-right">
          <h2>Last blog posts</h2>
        </div>
        <div className="medium-6 large-6 columns m-story">
          <a
            className="m-story"
            data-collapsed="true"
            href="https://medium.com/@threobin/do-you-really-need-global-npm-packages-a3f21dc2396f"
          >
            Do you really need global NPM packages?
          </a>
        </div>
        <div className="medium-6 large-6 columns"></div>
      </div>
    );
  }
}