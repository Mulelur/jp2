import React from "react";
import { Expertise } from "../components";
import { Heading2 } from "../components/expertise/styles/expertise";
import { highSchool, vut } from "../components/expertise/data/subjectsData";
import {
  NOTURGENTANDALSONOTIMPORTANT,
  NOTURGENTBUTIMPORTANT,
  URGENTANDIMPORTANT,
  URGENTBUTNOTIMPORTANT,
} from "../components/expertise/data/manegementMatrixData";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Row>
        <Expertise.Col>
          <Expertise.Heading1># www</Expertise.Heading1>
          <Expertise.Text>
            As an engineer, I am skilled at using data to make informed
            decisions and I enjoy utilizing both quantitative and qualitative
            data into beautiful and useful visuals and analyses. I am skilled
            with: - PowerPoint - Excel - Word - Access - Minitab In addition, I
            work with teams to eliminate both political and cultural barriers.
          </Expertise.Text>
          <Expertise.Text>
            🦶 I help my customers bring their idea of a product to life. I have
            experience in product development in different industries including
            museum exibitions, sports equipment, RC vehicle parts and
            industrial.
          </Expertise.Text>
          <Expertise.Text>
            🌳 I have brought numerous products to market with many more in the
            working. I have also completed over fifty projects regarding sports
            equipment.
          </Expertise.Text>
          <Expertise.Text>
            🤖 I love to experiment. I try new tools, and I look for innovative
            materials and groundbreaking technical solutions. I believe,
            however, that the key to success is the proper organization of work
            and the implementation of proven methods that ensure good decisions
            and facilitate cooperation with my partners.
          </Expertise.Text>
          <Expertise.Text>
            🕵️‍♂️ I’m not a spy, I don't track any users. If you want to get in
            touch, say hello.
          </Expertise.Text>
        </Expertise.Col>
        <Expertise.Col>
          {/* <Expertise.Avatar>
            <Expertise.Image></Expertise.Image>
          </Expertise.Avatar> */}
          <Expertise.Avatar>
            <Expertise.Image1></Expertise.Image1>
          </Expertise.Avatar>
        </Expertise.Col>
      </Expertise.Row>
      <Expertise.SubjectRow>
        <Expertise.Col>
          <Heading2>## High school</Heading2>
          <Expertise.List>
            {highSchool.map((item) => {
              return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
            })}
          </Expertise.List>
        </Expertise.Col>
        <Expertise.Col>
          <Heading2>## Modules</Heading2>
          <Expertise.List>
            {vut.map((item) => {
              return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
            })}
          </Expertise.List>
        </Expertise.Col>
      </Expertise.SubjectRow>
      <Expertise.MatrixTitleContainer>
        <Expertise.Heading2>Manegement Matrix</Expertise.Heading2>
      </Expertise.MatrixTitleContainer>
      <Expertise.MMRow>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>URGENT AND IMPORTANT</Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {URGENTANDIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>
            URGENT BUT NOT IMPORTANT
          </Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {URGENTBUTNOTIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
      </Expertise.MMRow>
      <Expertise.MMRow>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>URGENT AND IMPORTANT</Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {NOTURGENTBUTIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>
            URGENT BUT NOT IMPORTANT
          </Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {NOTURGENTANDALSONOTIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
      </Expertise.MMRow>
    </Expertise>
  );
}
