import React from 'react';
import CareerItem from '../components/careerItem';

const places = [
  {
    description: {
      company: 'Freelance',
      role: 'Full Stack Developer',
      when: '2015 - 2022',
    },
  },
  {
    link: 'http://www.addfuel.it',
    description: {
      company: 'Fuel',
      role: 'Front End Developer',
      when: '03.2015 - 06.2015',
      technology: 'Angular, jQuery, CSS3, HTML5',
    },
    imageSrc: 'images/fuel.png',
  },
  {
    link: 'http://www.majeeko.com',
    description: {
      company: 'Majeeko',
      role: 'Full Stack Developer',
      when: '09.2015 - 12.2015',
      technology: 'Angular, jQuery, CSS3, HTML5, Node JS, Mongo DB, Express',
    },
    imageSrc: '/images/majeeko.png',
  },
  {
    link: 'https://www.mvlabs.it',
    description: {
      company: 'MV labs',
      role: 'Full Stack Developer - collaborator',
      when: '2016,2019',
      technology: 'React, jQuery, Node JS, HTML5',
    },
    imageSrc: '/images/mv.jpg',
  },
  {
    link: 'https://www.lynxspa.com/',
    description: {
      company: 'Lynx SPA',
      role: 'Senior Frontend Developer',
      when: '2022 - current',
    },
    imageSrc: '/images/lynx.svg',
  },
];

export default function () {
  return (
    <div className="row main">
      <div className="medium-2 large-2 columns text-right">
        <h2>Some places where I've worked</h2>
      </div>
      <div className="medium-10 large-10 columns">
        {places.map((elem, index) => (
          <CareerItem item={elem} key={index} />
        ))}
      </div>
    </div>
  );
}
