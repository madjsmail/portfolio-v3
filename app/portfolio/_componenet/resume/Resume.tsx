import Badge from "@/app/_lib/components/Badge/badge";
import { CardSpotlightBorderCSS } from "@/app/_lib/components/CardSpotlightBorder/CardSpotlightBorder";
import EducationTimelineItem from "@/app/_lib/components/EducationTimelineItem/EducationTimelineItem";
import ExperienceTimelineItem from "@/app/_lib/components/ExperienceTimelineItem/ExperienceTimelineItem";
import React from "react";

function Resume() {
  const experiences = [
    {
      position: "Software Engineer",
      company: "CAMIO",
      startDate: "Apr 2023",
      endDate: "Ongoing",
      location: "Algeria, Remote",
      role: "Full Stack Web Development",
      description:
        "Full stack web development using Angular and Express.js, maintaining and adding features to websites. Collaborated closely with designers and QA for seamless project execution. Proficient in Express.js, optimizing performance, and introducing new functionality. Contributed to reaching 1000+ users. Committed to industry best practices and coding standards.",
      technologiesUsed: ["Angular", "Express.js"],
    },
    {
      position: "Software Engineer",
      company: "HOTELLO",
      startDate: "Jan 2023",
      endDate: "Apr 2023",
      location: "Canada, Remote",
      role: "Angular Development",
      description:
        "Utilized Angular framework to develop features and troubleshoot issues. Conducted comprehensive testing and collaborated with the team to maintain project timelines. Employed Angular for innovative solutions, exceeding client expectations. Collaborated with QA to identify and resolve bugs.",
      technologiesUsed: ["Angular"],
    },
    {
      position: "Web Developer",
      company: "FREELANCER",
      startDate: "2018",
      endDate: "2023",
      role: "Web Development",
      description:
        "Leveraged HTML, CSS, and JavaScript to build top-quality code. Developed secure web solutions and worked closely with back-end developers. Utilized APIs for data provision and developed custom websites for individual client needs. Collaborated on web content maintenance.",
      technologiesUsed: ["HTML", "CSS", "JavaScript"],
    },
    {
      position: "Software Engineer Intern",
      company: "SETRAM",
      startDate: "2019",
      endDate: "2020",
      location: "Algeria, On Site",
      role: "CMMS Team",
      description:
        "Contributed to the analysis of document management systems as part of a CMMS team. Conceptualized and developed a document management system using PHP (Laravel). Implemented procedures for ongoing website revisions, contributing to high-quality, user-friendly websites. Assisted in creating database structures and formatted visual media for optimal web usage.",
      technologiesUsed: ["PHP", "Laravel"],
    },
  ];
  const educationData = [
    {
      institution: "UAMO Bouira University",
      degree: "MASTER DEGREE in Computer Systems",
      startDate: "2020",
      endDate: "2022",
      location: "Bouira, Algeria",
    },
    {
      institution: "UAMO Bouira University",
      degree: "BACHELOR DEGREE in Computer Science",
      startDate: "2017",
      endDate: "2020",
      location: "Bouira, Algeria",
    },
    // Add more education items as needed
  ];
  return (
    <section className="content-grid resume-grid">
      <div className="grid-header">
        <Badge type={"ic-terine"}>Resume</Badge>
        <h1>Resume</h1>
      </div>
      <div className="container">
        <div className="resume__left experience">
          <h1>Experience</h1>
          <div className="experience__time-line">
            {experiences.map((experience, index) => (
              <CardSpotlightBorderCSS className="experience__card" key={index} type="cerise">
                <ExperienceTimelineItem  {...experience} />
              </CardSpotlightBorderCSS>
            ))}
          </div>
        </div>

        <div className="resume__right education">
          <h1>Educational</h1>
          <div className="education__time-line">
          {educationData.map((education, index) => (
             <CardSpotlightBorderCSS className="education__card" key={index} type="orange-peel">
            <EducationTimelineItem key={index} {...education} />
            </CardSpotlightBorderCSS>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
