import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const About = () => {
  return (
    <><Section id='about'>
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        I am Ioannis Kleftogiannis, I am 21 years old, I live in Athens and I aspire to become a web developer.
        Even though I am self taught, I enjoy learning and I am trying to develop my skills everyday.
        I have been programming for the last 3 years (mostly as a hobby and university projects)
        but I started programming more seriously 1 year ago and it's been a really fun experience so far. 
      </SectionText>
    </Section><br /></>
  );
};

export default About;
