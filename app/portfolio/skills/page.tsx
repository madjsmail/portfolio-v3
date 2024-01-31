'use client'
import Badge from "@/app/_lib/components/Badge/badge";
import React from "react";
import SkillsWrapper from "../_componenet/Skills/Skills";
import { CardSpotlightBorderCSS } from "@/app/_lib/components/CardSpotlightBorder/CardSpotlightBorder";
import style from './Skills.module.css'
function Skills() {
  const work = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Angular',
    'NodeJS',
    'Express',
    'MongoDB',
    'Azure',
    'GIT'
  ];
  const night = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'React',
    'Next',
    'Vue',
    'Nuxt',
    'NodeJS',
    'Express',
    'NestJs',
    'Postgres',
    'MongoDB',
    'GitHub',
    'Jira'
  ];
  const SoftSkills = [
    'Critical Thinking',
    'Creativity',
    'Time Management',
    'Teamwork',
    'Conflict Resolution',
    'Decision Making',
    'Flexibility',
    'Stress Management'
  ];

  return (
    <div className="content-grid skills-grid">
        <div className={style.container + ' container'}>

        <SkillsWrapper title={"what i use at work"} skills={work} />
        <SkillsWrapper title={"what i use at home"} skills={night} />
        <SkillsWrapper title={"soft skills"} skills={SoftSkills} />

        </div>
    </div>
  );
}

export default Skills;


