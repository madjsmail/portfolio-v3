/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './Testimonial.css'
import { CardSpotlightBorderCSS } from '../CardSpotlightBorder/CardSpotlightBorder';
type TestimonialProps = {
  title: string;
  text: string;
  imgSrc: string;
  name: string;
  job: string;
};

const Testimonial: React.FC<TestimonialProps> = ({title, text, imgSrc, name, job }) => {
  return (
    <CardSpotlightBorderCSS type="cerise">
    <div className="testimonial">
      <h3 className="testimonial__title">{title}</h3>
      <p className="testimonial__text mb-25">{text}</p>

      <div className="testimonial__details">
        <div className="testimonial__img">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="testimonial__info">
          <h4 className="testimonial__name">{name}</h4>
          <h5 className="testimonial__job">{job}</h5>
        </div>
      </div>
    </div>
    </CardSpotlightBorderCSS>
  );
};

export default Testimonial;