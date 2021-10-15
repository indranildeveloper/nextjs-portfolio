import React from "react";
import { FaDownload } from "react-icons/fa";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />I am Indranil
      </SectionTitle>
      <SectionText>
        Full Stack software developer (MERN Stack) and JavaScript enthusiast who
        specializes in Front-end development with React JS Framework.
      </SectionText>
      <a href="/resume.pdf" target="_blank" rel="noreffer noreferrer">
        <Button>
          <FaDownload style={{ marginRight: "1rem" }} /> Resume
        </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
