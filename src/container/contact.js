import React from "react";
import { Contact } from "../components";
import { LocationIcon, MailIcon, PhoneIcon } from "../icons";

export default function ContactContainer() {
  return (
    <Contact>
      <Contact.Row>
        <Contact.Col>
          <Contact.Avatar>
            <Contact.Image1></Contact.Image1>
          </Contact.Avatar>
        </Contact.Col>
      </Contact.Row>
      <Contact.Row>
        <Contact.Heading1>Contact Me</Contact.Heading1>
      </Contact.Row>
      <Contact.Row>
        <Contact.Col>
          <PhoneIcon />
          <Contact.Heading2>Phone</Contact.Heading2>
          <Contact.Text>+27 797385674</Contact.Text>
        </Contact.Col>
        <Contact.Col>
          <MailIcon />
          <Contact.Heading2>email</Contact.Heading2>
          <Contact.Text>
            <Contact.Mail href="mailto:Mufamadijeddie28@gmail.com ">
              Mufamadijeddie28@gmail.com
            </Contact.Mail>
          </Contact.Text>
        </Contact.Col>
        <Contact.Col>
          <LocationIcon />
          <Contact.Heading2>location</Contact.Heading2>
          <Contact.Text>
            18 William Porter Street Vanderbijlpark 1911
          </Contact.Text>
        </Contact.Col>
      </Contact.Row>
    </Contact>
  );
}
