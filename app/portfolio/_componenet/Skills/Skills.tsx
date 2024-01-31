import Badge from '@/app/_lib/components/Badge/badge'
import React from 'react'
import styles from './SkillsWrapper.module.css';
import { CardSpotlightBorderCSS } from '@/app/_lib/components/CardSpotlightBorder/CardSpotlightBorder';
function SkillsWrapper({title , skills, className}:{title: string ,skills: string[], className?: string}) {
  return (

        <div className={styles.wrapper}>
              <h3>
               {title}
              </h3>
              <div className={styles.skillsWrapper}>
                {skills?.map((skill, index) => (
                  <Badge key={index} type={"orange-peel"} >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

  )
}

export default SkillsWrapper