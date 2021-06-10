import React from "react";
import { Home } from "../components";
import HomeIcon from "../icons";
import img from "../assets/homeIcon.svg";
import cv from "../assets/cv/Mufamadi Rotondwa CV.pdf";
import Typewiter from "typewriter-effect";

export default function HomeContainer() {
  return (
    <Home>
      <Home.Column>
        <Home.Text>Hi, I'm MUFAMADI ROTONDWA</Home.Text>
        <Home.Title>
          <Typewiter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewiter) => {
              typewiter
                .typeString(
                  "I am skilled at using data to make informed decisions."
                )
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  " I enjoy utilizing both quantitative and qualitative data into beautiful and useful visuals and analyses."
                )
                .start();
            }}
          />
        </Home.Title>
        <Home.Text>
          With a passion for making processes better, I have more than 20 years
          experience working with small and large teams to develop strategies,
          improve workflows, and achieve breakthrough results. I have extensive
          experience with many methodologies.
        </Home.Text>
        <Home.Link href={cv} target="_blank">
          download cv
        </Home.Link>
      </Home.Column>
      <Home.Column>
        <Home.Img src={img} />
      </Home.Column>
    </Home>
  );
}
