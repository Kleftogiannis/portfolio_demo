import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typed from 'react-typed';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        If you are looking for <br/>
        <Typed 
        className="typed-text" 
        strings={[' a Junior web developer', 'passion for programming', 'constant urge to learn']}
        typeSpeed={30}
        backSpeed={50}
        loop
        />
        <br />
        I am your guy!
      </SectionText>
      <a href='./data/ΒΙΟΓΡΑΦΙΚΟ.docx' download='My_CV'><Button>Download CV</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;