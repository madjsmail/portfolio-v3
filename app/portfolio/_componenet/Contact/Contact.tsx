import Badge from "@/app/_lib/components/Badge/badge";
import ShineButton from "@/app/_lib/components/ShineButton/ShineButton";
import React from "react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

function Contact() {
  return (
    <section className="content-grid contact-grid">

      <div className="container">
        <Badge type={"baby-powder"}>Contact me</Badge>
        <h1>Contact me</h1>
        <div className="text">
          <h3 className="business">You know the business</h3>
          <h3 className="code">I know how to code</h3>
        </div>
        <ShineButton variant="hover">Hire me</ShineButton>
      </div>
      <div className="container">
        <p>find me on </p>

        <div id="social-test">

          <ul className="social">
            <li>
              <SiFacebook />
            </li>
            <li>
             
              <SiTwitter />
            </li>
            <li>
             
              <SiInstagram />
            </li>

            <li>
             
              <SiGithub />
            </li>
            <li>
             
              <SiLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
