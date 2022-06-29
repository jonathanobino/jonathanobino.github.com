import React from 'react';
import getSVGIcon from '../API/getSVGIcon';

export default function () {
  return (
    <div className="footer">
      <ul className="inline-list">
        <li>
          <a href="https://github.com/jonathanobino" target="_blank">
            <i className="fa fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="http://codepen.io/jonathanobino" target="_blank">
            <i className="fa fa-codepen fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://it.linkedin.com/in/jonathanobino" target="_blank">
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@threobin" target="_blank">
            <i className="fa fa-medium fa-2x"></i>
          </a>
        </li>
      </ul>
      <p className="text-center">Jonathan Obino © {new Date().getFullYear()}</p>
      <p className="text-center credits">
        Made with <span className="fa fa-heart heart"></span> and{' '}
        <img src={getSVGIcon('react')} alt="React JS" />
      </p>
    </div>
  );
};
