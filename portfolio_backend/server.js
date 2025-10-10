// server.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route: Test server
app.get("/", (req, res) => {
  res.send("🚀 Nodemailer backend is running");
});

// Route: Send Email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password if using Gmail
      },
    });

    // Mail content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Message from ${name}`,
      text: `
You received a new message from your website contact form:

Name: ${name}
Email: ${email}
Message:
${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    res.json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

// Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

// export default app;
module.exports = app;
