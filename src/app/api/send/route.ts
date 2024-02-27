import { prisma } from "@/db/prisma";
import { EmailTemplate } from "@/lib/resend/template";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend("re_QhwXSfCn_82bw5LDkmocDwrcm4cY4WAmE");

const contactSheme = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  message: z.string().optional(),
  propertyId: z.string().optional(),
});

export async function POST(request: Request) {
  const data = await request.json();
  const safeData = contactSheme.parse(data);
  try {
    const contact = await prisma.contact.create({
      data: safeData,
    });

    const data = await resend.emails.send({
      from: `Acme <${safeData.email}>`,
      to: ["sidymohamedsalim.diallo@usmba.ac.ma"],
      subject: "Prise de Contact",
      react: EmailTemplate({ userConctact: safeData }),
      text: "",
    });

    return Response.json({ data, contact });
  } catch (error) {
    return Response.json({ error });
  }
}
