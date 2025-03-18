import { Resend } from "resend";
import { contactSchema } from "@/schemas/contact";
import ContactEmail from "@/components/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const validatedFields = contactSchema.safeParse(formData);

    if (!validatedFields.success) {
      const error = validatedFields.error.errors[0].message;
      return Response.json({ error }, { status: 400 });
    }

    const { email, firstname, company, message } = validatedFields.data;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["soorajkj46@gmail.com"],
      subject: "Hello world",
      react: ContactEmail({ email, firstname, company, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
