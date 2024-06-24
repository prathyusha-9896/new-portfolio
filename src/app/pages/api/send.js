import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;
    // Create a Nodemailer transporter with your email configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      //port: 587,
      //secure: false, // upgrade later with STARTTLS
      auth: {
        user: 'prathyushaprathyu.ce@gmail.com',
        pass: 'Praharshi@1615',
      },
    });

    try {
      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: email, // Use the sender's email address
        to: 'prathyushaprathyu.ce@gmail.com',
        subject: subject,
        text: `Email: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      });
      
      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
