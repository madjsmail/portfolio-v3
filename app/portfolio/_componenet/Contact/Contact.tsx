import Badge from '@/app/_lib/components/Badge/badge'
import ShineButton from '@/app/_lib/components/ShineButton/ShineButton'
import React from 'react'

function Contact() {
  return (
    <section className="content-grid contact-grid">
    <div className="container">
      <Badge  type={'baby-powder'}>
        Contact me
      </Badge>
      <h1>Contact me</h1>
            <div className="text">
            <h3 className="business">
              you know the business
            </h3>
            <h3 className="code">
              I know how to code
            </h3>
            </div>
      <ShineButton variant="hover">Hire me</ShineButton>

    </div>
  </section>
  )
}

export default Contact