import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        The Personal Portfolio of Dhruv Rana
      </SectionTitle>
      <SectionText>
        I am a frontend developer currently working at TCS aspiring for career
        growth by building excellent web apps and providing solutions for
        critical business needs.
      </SectionText>
      <Button
        onClick={() =>
          window.open("https://www.linkedin.com/in/dhruv-rana98/", "_blank")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
