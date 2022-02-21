import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Contact = () =>(
    <Section nopadding id='contact'>
    <SectionTitle main>Contact me</SectionTitle>
    <form action="https://formsubmit.co/kleftojohn@gmail.com" method="POST">
        <input type="text" name="name" placeholder='Message' required/>
        <input type="email" name="email" placeholder='Email address' required/>
        <button type="submit">Send</button>
    </form>
    </Section>
)