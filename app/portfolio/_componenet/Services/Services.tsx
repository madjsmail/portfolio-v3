import CardSpotlightEffect from '@/app/_lib/components/CardSpotlight/CardSpotlight';
import React from 'react'
import { SiAdventofcode, SiAngular, SiExpress, SiGoogleoptimize, SiZoiper } from 'react-icons/si';
import './services.css'
import Badge from '@/app/_lib/components/Badge/badge';
function Services() {
    const servicesArray = [
        {
          icon :<SiAdventofcode width={40} height={40}  />,
          title: "Full Stack Web Development",
          description:
            "Offer end-to-end web development solutions, showcasing expertise in both frontend (e.g., Angular, React) and backend (e.g., Express.js, Node.js) technologies. Highlight your ability to deliver seamless and feature-rich web applications.",
        },
        {
          icon: <SiAngular />,
          title: "Angular Development",
          description:
            "Specialize in Angular development, providing services to create dynamic and interactive user interfaces. Showcase your proficiency in utilizing the Angular framework to build modern and responsive web applications.",
        },
        {
          icon :<SiExpress />,
          title: "Express.js Backend Development",
          description:
            "Provide backend development services using Express.js or nestjs, emphasizing your skills in building robust server-side applications. Highlight your ability to optimize code for performance and introduce new functionalities.",
        },
        {
          icon :<SiZoiper />,
          title: "Web Development and Design Collaboration",
          description:
            "Offer collaborative web development services, working closely with designers to ensure a harmonious blend of aesthetics and functionality. Emphasize your experience in cross-functional teamwork, resulting in visually appealing and user-friendly websites.",
        },
        {
          icon : <SiGoogleoptimize />,
          title: "Code Optimization and Best Practices",
          description:
            "Provide services in code optimization, ensuring clean, maintainable, and high-performance code. Highlight your commitment to industry best practices and coding standards, delivering solutions that adhere to quality and efficiency.",
        },
      ];
  return (
    <section className="content-grid services-grid">
      <div className="grid-header">
        <Badge type={'cerise'}>
          Services
        </Badge>
        <h1>
        Services
        </h1>
        <h3>
        Idea to Execution, Streamlined
        </h3>
      </div>
    <div className="container">

      <div className="service-container">
      {servicesArray.map((service, index) => (
        <div key={index} className={`flex-item  item-${index + 1}`}>
          <CardSpotlightEffect
            icon={service.icon}
            greeting={service.title}
            description={service.description}
          />
        </div>
      ))}
      </div>
    </div>
  </section>
  )
}

export default Services