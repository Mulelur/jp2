import React from "react";
import { About } from "../components";
import cv from "../assets/cv/Mufamadi Rotondwa CV.pdf";
import letter from "../assets/cv/jd letter.pdf";

export default function AboutContainer() {
  return (
    <About>
      <About.Row>
        <About.Column>
          <About.Text>A little bit</About.Text>
          <About.Title>About Me</About.Title>
          <About.Text>
            I’m from South Africa. I am a young and passionate industrial
            student. I am self-driven and willing to make a difference.
          </About.Text>
          <About.Text>
            Creative, versatile industrial design engineer educated in the
            Netherlands. I have extensive experience in Freelance, both in
            industrial design and graphic design. Currently studying industrial.
          </About.Text>
          <About.Text>
            <About.Link href={cv} target="_blank">
              Dawonload cv
            </About.Link>
            <About.Link href={letter} target="_blank">
              Download cover letter
            </About.Link>
          </About.Text>
        </About.Column>
        <About.Column>
          <About.Avatar>
            <About.Img></About.Img>
          </About.Avatar>
        </About.Column>
      </About.Row>
      <About.BottomCol></About.BottomCol>
    </About>
  );
}
