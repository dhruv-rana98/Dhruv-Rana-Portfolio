import React from "react";
import {
  DiJira,
  DiGithubBadge,
  DiNodejsSmall,
  DiFirebase,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world from
      design to frontend to backend.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experienced with <br />
            React.js, Cotext.api and AEM Sites.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Posses knowledge of <br />
            Node.js, PHP, Core-Java and Python.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithubBadge size="3rem" />
        <ListContainer>
          <ListTitle>Team Collaboration</ListTitle>
          <ListParagraph>
            Experienced with working on Git and Bitbucket,
            <br />
            for version control and team collaboration.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJira size="3rem" />
        <ListContainer>
          <ListTitle>Experience with Agile</ListTitle>
          <ListParagraph>
            Experienced with working in Agile Teams.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
