import Badge from '@/app/_lib/components/Badge/badge'
import ProjectCardHover from '@/app/_lib/components/ProjectCardHover/ProjectCardHover'
import React from 'react'

function Project() {
  return (
    <section className="content-grid project-grid">
        <div className="grid-header">
        <Badge type={'baby-powder'}>
        Projects
      </Badge>
      <h1>
        Projects
      </h1>
    <h3>
      the work I&apos ve done <span>so far</span>
    </h3>
        </div>
    <div className="container">
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Moadly"
        description="Calculate student grades"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Moadly"
        description="Calculate student grades"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Moadly"
        description="Calculate student grades"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Moadly"
        description="Calculate student grades"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Moadly"
        description="Calculate student grades"
      />

      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Moadly"
        description="Calculate student grades"
      />
    </div>
  </section>
  )
}

export default Project