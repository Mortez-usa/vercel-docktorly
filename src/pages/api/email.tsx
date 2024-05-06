import sgMail from "@sendgrid/mail";
const apiKey = process.env.SENDGRID_API_KEY || ""; // Ensure that the apiKey is defined
sgMail.setApiKey(apiKey);

export default async function email(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const msg = {
      to: "info@docktorly.com", // Change to your recipient.
      from: "info@docktorly.com", // Change to your verified sender.
      subject: `${name} has sent you a message`,
      text: message,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `,
    };
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json();
        console.log("Email sent");
      })
      .catch((error) => {
        res.status(500).json();
        console.error(error);
      });
  }
}
