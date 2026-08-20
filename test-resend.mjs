import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: "onboarding@resend.dev",
  to: ["studyingtactics0@gmail.com"],
  subject: "MDCAT App Test",
  html: "<p>It works!</p>",
});

console.log("DATA:", data);
console.log("ERROR:", error);