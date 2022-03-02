import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blurriness: 0,
      translate: 0,
    };
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  render() {
    const style = {
      background: this.props.background,
    };
    return (
      <div className="wrapper">
        <div style={style} className="parallax"></div>
        <div className="container">
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.translate != nextState.translate;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler(event) {
    const wrapper = findDOMNode(this);
    const parallax = wrapper.querySelector('.parallax');
    const { height } = wrapper.getBoundingClientRect();
    let translate = 0;
    if (height - window.scrollY > 50) {
      translate = parseInt(window.scrollY / 3);
      window.requestAnimationFrame(() => {
        parallax.style.transform = `translate3d(0px,${translate}px,0px)`;
      });
    }
  }
}

export default Parallax;
