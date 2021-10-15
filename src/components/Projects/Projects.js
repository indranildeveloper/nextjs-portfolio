import React from "react";
import { FaGithub, FaArrowAltCircleRight } from "react-icons/fa";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title="title">{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div style={{ marginTop: "3rem" }}>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source} target="_blank">
                <FaGithub /> Code
              </ExternalLinks>
              <ExternalLinks href={visit} target="_blank">
                <FaArrowAltCircleRight />
                Visit
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
    >
      <ExternalLinks
        href="https://github.com/indranildeveloper"
        target="_blank"
      >
        See all projects
      </ExternalLinks>
    </div>
  </Section>
);

export default Projects;
