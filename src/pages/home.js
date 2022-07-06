import React from 'react';
import ContactForm from '../components/contactForm';
import Parallax from '../components/parallax';
import Footer from '../components/footer';
import Panel from '../components/panelSection';
import GentleScroll from '../components/gentleScroll';
import OpenSource from '../components/openSource';
import Codepen from '../components/codepen';
import Places from '../components/places';
import WhatIUse from '../components/whatIUse';
import WhoAmI from '../components/whoAmI';

const Home = () => {
  return (
    <>
      <Parallax background="url(/images/background.jpg)" speed={5}>
        <img src="/images/logo.png" alt="logo" />
        <GentleScroll target="main">
          <div className="mouse">
            <div className="upAndDown"></div>
          </div>
        </GentleScroll>
      </Parallax>
      <main>
        <Panel background="#F0F0F0">
          <WhoAmI />
          <WhatIUse />
          <Places />
          <OpenSource />
          <Codepen />
        </Panel>
      </main>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
