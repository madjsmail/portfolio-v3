"use client";
import Image from "next/image";
import Badge from "./_lib/components/Badge/badge";

import ShineButton from "./_lib/components/ShineButton/ShineButton";
import { CardSpotlightBorderCSS } from "./_lib/components/CardSpotlightBorder/CardSpotlightBorder";
import FaqComponent from "./_lib/components/FaqComponent/FaqComponent";
import AccordionComponent from "./_lib/components/accordionCard/AccordionCard";
import InfiniteSlider from "./_lib/components/infineSlider/InfineSlider";
import BlurCard from "./_lib/components/blurCard/BlurCard";
import Testimonial from "./_lib/components/Testimonial/TestimonialCard";
import LampCard from "./_lib/components/lampCard/LampCard";
import InfiniteScroll from "./_lib/components/infiniteScroll/InfiniteScroll";

import TextSliding from "./_lib/components/textDliding/TextSliding";
import TextReveal from "./_lib/components/TextReveal/TextReveal";
import { CardSpotlightEffect } from "./_lib/components/CardSpotlight/CardSpotlight";
import ProjectCard from "./_lib/components/ProjectCard/ProjectCard";
import ExperienceCard from "./_lib/components/ExperienceCard/ExperienceCard";
import BentoGrid from "./_lib/components/BentoGrid/BentoGrid";
import { SiReact } from "react-icons/si";

export default function Home() {
  return (
    <div className="content-grid">
      <div className="container">
        <Badge type="ic-terine">IC Terine Badge</Badge>
        <Badge type="cerise">Cerise Badge</Badge>
        <Badge type="orange-peel">Orange Peel Badge</Badge>
      </div>
      <h1>the button</h1>

      <div className="">
        <h1>main button </h1>
        <div className="container">
          <ShineButton variant="hover">Hover to Shine</ShineButton>
          <ShineButton variant="animated">Animated Shine</ShineButton>
          <ShineButton variant="alt">Alternative Shine Effect</ShineButton>
        </div>
      </div>

      <div className="hsimmer-p">
        <p className="shimmer">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga optio
          facilis et, nihil repellendus natus mollitia explicabo aliquid quis
          commodi iste repellat, aperiam ducimus sint? Eveniet dicta porro
          corporis quis.
        </p>
      </div>

      <div className="animated">
        <h1 className="animated-gradient"> animated text</h1>
        <p className="animated-gradient">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      <div className="CardSpotlightBorderCSS">
        <h1>Card Spotlight Border</h1>
        <div className="cards-grid">
          <div>
            {/* Example with --cl--ic-terine color */}
            <CardSpotlightBorderCSS type="ic-terine">
              <div style={{ width: "350px" }}>
                <div className="card__header">
                  <h5>madjidsmail</h5>
                </div>
                <div className="card__body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque, animi! Hic, voluptatibus. Similique, veniam
                  architecto illum dignissimos, at quis perferendis numquam rem
                  corporis quasi eius, obcaecati in eos quam quia.
                </div>
              </div>
            </CardSpotlightBorderCSS>

            {/* Example with --cl--cerise color */}
            <CardSpotlightBorderCSS type="cerise">
              <h1>madjid smail</h1>
            </CardSpotlightBorderCSS>

            {/* Example with --cl--orange-peel color */}
            <CardSpotlightBorderCSS type="orange-peel">
              <p>This is some text content.</p>
            </CardSpotlightBorderCSS>

            {/* Example with --cl--baby-powder color */}
            <CardSpotlightBorderCSS type="baby-powder">
              <div>
                <div className="card__header">
                  <h5>Another Example</h5>
                </div>
                <div className="card__body">More content goes here.</div>
              </div>
            </CardSpotlightBorderCSS>
          </div>
        </div>
      </div>

      <div className="fag">
        <FaqComponent></FaqComponent>
      </div>

      <div className="acording">
        <AccordionComponent />
      </div>

      <div className="blur card">
        <h3>blur card</h3>
        <BlurCard />
      </div>
      <div className="testmonial">
        <h3>testmonial</h3>
        <section className="container container--testimonials">
          <Testimonial
            text="At first, it may be intimidating to see all of the available courses. Pick a track that interests you and work through it at your own pace."
            imgSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            name="Timmy Dicki"
            job="Railroad Engineer" title={""}          />
          <Testimonial
            text="At first, it may be intimidating to see all of the available courses. Pick a track that interests you and work through it at your own pace."
            imgSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            name="Timmy Dicki"
            job="Railroad Engineer" title={""}          />
          <Testimonial
            text="At first, it may be intimidating to see all of the available courses. Pick a track that interests you and work through it at your own pace."
            imgSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            name="Timmy Dicki"
            job="Railroad Engineer" title={""}          />
          {/* Add more Testimonial components with different props for each testimonial */}
        </section>

        <div className="">
          <h1>adlamdkada</h1>
          <LampCard></LampCard>
        </div>
      </div>
      <div>
        <h1>Infinite Scroll Example</h1>
        <InfiniteScroll logos={[]} />
      </div>
      <div>
        <h1>card spotlight</h1>
        <CardSpotlightEffect
          icon={<SiReact/>}
          greeting="Hello!"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo."
        />
      </div>
      <div>
        <h1>text slid</h1>
        <div>
          <TextSliding
            mainText="Dive Into"
            sliderWords={["Ideas", "Tech", "Art"]}
          />
        </div>
        <div>
          <h1>text revile</h1>
          <div>
            <TextReveal text={"Custom Text for Animation ✨"} />
          </div>
        </div>
        <div>
          <h1>Project card</h1>
      
       
          <CardSpotlightBorderCSS type="ic-terine">
          <ProjectCard
            title="ELECTRONIC HEALTH RECORD (EHR)"
            description="Management based on blockchain in healthcare systems...."
            imageUrl="https://healthcare.utah.edu/sites/g/files/zrelqx136/files/media/images/2023/ehr-1476525_1920.png"
            projectUrl="https://github.com/your-username/your-project"
          />
          </CardSpotlightBorderCSS>
   
          
        </div>
        <div>
          <h1>Experiance card</h1>
      
       
          <CardSpotlightBorderCSS type="ic-terine">
        
          <ExperienceCard
            company="ABC Company"
            time="January 2020 - Present"
            employmentType="Full-time"
            description="Worked as a software engineer, responsible for developing and maintaining web applications."
            technologies={['React', 'Node.js', 'MongoDB']}
          />

          </CardSpotlightBorderCSS>
   
          
        </div>

        <div className="bentoGrid">
          <h1>bentoGrid</h1>
          <div style={{height: '80vh'}}>
          <BentoGrid/>
          </div>
        </div>
      </div>
    </div>
  );
}
