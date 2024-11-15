import * as React from "react";
import * as ReactEmail from "@react-email/components";
import { z } from "zod";
import { contactSchema } from "@/schemas/contact";

interface EmailTemplateProps extends z.infer<typeof contactSchema> {}

export default function EmailTemplate(props: EmailTemplateProps) {
  const { email, fullname, message, company } = props;

  return (
    <ReactEmail.Html>
      <ReactEmail.Head />
      <ReactEmail.Preview>Reaching Out to Connect</ReactEmail.Preview>
      <ReactEmail.Body>
        <ReactEmail.Container>
          <ReactEmail.Text>Here is what {fullname} wrote</ReactEmail.Text>
          <ReactEmail.Hr />
          <ReactEmail.Text>{message}</ReactEmail.Text>
          <ReactEmail.Hr />
          <ReactEmail.Text>Best regards,</ReactEmail.Text>
          <ReactEmail.Text>{fullname}</ReactEmail.Text>
          <ReactEmail.Text>{company}</ReactEmail.Text>
          <ReactEmail.Text>{email}</ReactEmail.Text>
        </ReactEmail.Container>
      </ReactEmail.Body>
    </ReactEmail.Html>
  );
}
