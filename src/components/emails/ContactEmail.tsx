import * as React from "react";
import * as ReactEmail from "@react-email/components";
import { ContactSchema } from "@/schemas/contact";

interface ContactEmailProps extends ContactSchema {}

export default function ContactEmail(props: ContactEmailProps) {
  const { email, firstname, lastname, company, message } = props;
  return (
    <ReactEmail.Html lang="en" dir="ltr">
      <ReactEmail.Head>
        <title>Reaching out to connect</title>
      </ReactEmail.Head>
      <ReactEmail.Preview>Reaching Out to Connect</ReactEmail.Preview>
      <ReactEmail.Tailwind>
        <ReactEmail.Body>
          <ReactEmail.Container>
            <ReactEmail.Text className="!my-0">Hi Sooraj,</ReactEmail.Text>
            <ReactEmail.Text className="!my-0">{message}</ReactEmail.Text>
            <ReactEmail.Text className="!my-0">Best regards,</ReactEmail.Text>
            <ReactEmail.Text className="!my-0">
              {firstname + lastname}
            </ReactEmail.Text>
            <ReactEmail.Text className="!my-0">{company}</ReactEmail.Text>
            <ReactEmail.Text className="!my-0">{email}</ReactEmail.Text>
          </ReactEmail.Container>
        </ReactEmail.Body>
      </ReactEmail.Tailwind>
    </ReactEmail.Html>
  );
}
