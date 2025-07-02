import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'mailcluster.loopia.se',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL, // tvoj email na Loopia
      pass: process.env.EMAIL_PASSWORD,   // lozinka tog emaila
    },
  });

  try {
    await transporter.sendMail({
      from: `<${process.env.EMAIL}>`,
      to: `${process.env.EMAIL}`, // tvoja adresa primaoca
      subject: 'Upit sa sajta',
      text: `Ime: ${name} \nEmail: ${email} \n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Greška prilikom slanja mejla:', error);
    return res.status(500).json({ success: false, error });
  }
}
