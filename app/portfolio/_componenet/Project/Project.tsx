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
      the work I've done <span>so far</span>
    </h3>
        </div>
    <div className="container">
    <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Safax landing page"
        description="Landing page for safax"
      />
    <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="SecureDepot"
        description="Application designed to streamline the secure handling of deposit bags for a local bank"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Moadly"
        description="A web application that allows you to calculate your pass mark. The app is for first and second year"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="TASNIF"
        description="An app that allows the user to search for scientific journals with their classifications"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="GED SETRAM"
        description="Document Management System for the company setram"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="AWALNA"
        description="Dictionary for the Algerian dialect built with Vue.js and Firebase"
      />
      <ProjectCardHover
        imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="ELECTRONIC HEALTH RECORD"
        description="Management based on blockchain in healthcare systems"
      />


    </div>
  </section>
  )
}

export default Project