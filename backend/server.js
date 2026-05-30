/* global process */
import express from "express";
// ... le reste de votre code
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Transport email (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_PASS,
  },
});

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: message,
    });

    // ✅ IMPORTANT : JSON (pas de texte brut)
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);

    // ✅ JSON aussi ici
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});