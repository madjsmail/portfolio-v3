import Badge from '@/app/_lib/components/Badge/badge';
import ShineButton from '@/app/_lib/components/ShineButton/ShineButton'
import InfiniteScroll from '@/app/_lib/components/infiniteScroll/InfiniteScroll'
import React from 'react'
import { SiTypescript, SiJavascript, SiReact, SiAngular, SiVuedotjs, SiNuxtdotjs, SiExpress, SiNodedotjs, SiNestjs, SiTailwindcss, SiBulma } from 'react-icons/si';

function Main() {

  return (
    <div>
        <main className="content-grid main-grid">

        <div className="container">
        <Badge  type={'baby-powder'}>
             Welcome
          </Badge>
          <h4 className='shimmer'>Hello , My name is Abdelmadjid</h4>
          <h2>I am Software engineer , and Full stack web developer.</h2>
          <p>
            I collaborate with everyone to craft and code stunning and
            functional websites using javascript.
          </p>
          <ShineButton variant="hover">Resume</ShineButton>
        


        </div>
      </main>
    </div>
  )
}

export default Main