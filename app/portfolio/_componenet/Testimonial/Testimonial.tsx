import { CardSpotlightBorderCSS } from '@/app/_lib/components/CardSpotlightBorder/CardSpotlightBorder'
import Testimonial from '@/app/_lib/components/Testimonial/TestimonialCard'
import React from 'react'
import './Testimonial.css'
function TestimonialSection() {
  return (
    <section className="content-grid testimonial-grid">
    <div className="container">
      <h1>Testimonial</h1>
      <section className="container--testimonials">
      <Testimonial
          title="The it guy"
          text="You look like the it guy"
          imgSrc="https://dummyimage.com/600x400/000/fff"
          name="Amin "
          job="Director of Software Development"
        />
        <Testimonial
          title="Exceptional Service and Results"
          text="Smail consistently delivers results on time, while maintaining the highest standards of quality. He is a highly motivated team player, always willing to go above and beyond to ensure the success of our projects. He has an excellent ability to communicate with stakeholders, both technical and non-technical, and can explain complex concepts in a clear and concise manner."
          imgSrc="https://dummyimage.com/600x400/000/fff"
          name="Reza Assadi "
          job="Director of Software Development"
        />
        <Testimonial
          title="Calm and Disciplined"
          text="Abd El Madjid Smail radiates the room with his calm and discipline. At CAMIO, he looks after building and maintaining a best in class dashboard to run the business. [...]"
          imgSrc="https://dummyimage.com/600x400/000/fff"
          name="Camio "
          job=""
        />


      </section>
    </div>
  </section>
  )
}

export default TestimonialSection