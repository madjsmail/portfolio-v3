import Badge from '@/app/_lib/components/Badge/badge'
import InfiniteScroll from '@/app/_lib/components/infiniteScroll/InfiniteScroll';
import React from 'react'
import { SiTypescript, SiJavascript, SiReact, SiAngular, SiVuedotjs, SiNuxtdotjs, SiExpress, SiNodedotjs, SiNestjs, SiTailwindcss, SiBulma } from 'react-icons/si';

function About() {
  const LOGOS = [
    <SiTypescript width={40} height={40} key="typescript" />,
    <SiJavascript key="javascript" />,
    <SiReact key="react" />,
    <SiAngular key="angular" />,
    <SiVuedotjs key="vue" />,
    <SiNuxtdotjs key="nuxt" />,
    <SiExpress key="express" />,
    <SiNodedotjs key="node" />,
    <SiNestjs key="nest" />,
    <SiTailwindcss key="tailwind" />,
    <SiBulma key="bulma" />,
  ];
  return (
    <div className='content-grid about-grid'>
        <div className="grid-header">
            <Badge type={'orange-peel'}>
                About me
            </Badge>
        </div>
        <section className="scroll-reveal">
    <h2 className="section-title"><span> About me</span></h2>
    <p>
      <span>
      I am  a seasoned software engineer with expertise in full-stack web development. Armed with a Master&apos;s in Computer Systems, I&apos;ve contributed to impactful projects for CAMIO and HOTELLO. As a freelancer, I excel in crafting secure web solutions. I&apos;ve designed a document management system and explored blockchain for electronic health records. Let&apos;s connect and discuss how my skills can elevate our projects.
      </span>
    </p>
  </section>
{/* <div className="full-width">
<h2>tech i work with</h2>
          <InfiniteScroll logos={LOGOS} />
</div> */}
    </div>
  )
}

export default About