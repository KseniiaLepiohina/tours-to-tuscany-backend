import * as nodemailer from 'nodemailer';

export default async function sendEmail(toEmail: string, resetToken: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST,
    port: Number(process.env.EMAIL_SMTP_PORT),
    secure: process.env.EMAIL_SMTP_SECURE === 'true', // true for 465, false for others
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: `"ToursToTuscany" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Reset Your Password',
    text: `Click the link to reset your password: ${resetLink}`,
    html: `
      <h2>Reset your password</h2>
      <p>Click the button below to reset your password:</p>
      <a href="${resetLink}" style="
        display: inline-block;
        padding: 10px 20px;
        background-color: #FA8B02;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;">Reset Password</a>
      <p>This link will expire in 1 hour.</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.messageId);
    return 'Message sent successfully';
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

// async function createTestAccount() {
//   const testAccount = await nodemailer.createTestAccount();
//   console.log('Test account has been created:', testAccount);
// }

// createTestAccount();


// export async function sendResetEmail() {

//   try {

//     const transporter: Transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       secure: false,
//       auth: {
//         user: testAccount.user,
//         pass: testAccount.pass,
//       },
//     });

//     const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

//     const html = `
//       <h2>Reset your password</h2>
//       <p>Click the button below to reset your password:</p>
//       <a href="${resetLink}" style="
//         display: inline-block;
//         padding: 10px 20px;
//         background-color: #FA8B02;
//         color: #fff;
//         text-decoration: none;
//         border-radius: 5px;">Reset Password</a>
//       <p>This link will expire in 1 hour.</p>
//     `;

//     const mailOptions: SendMailOptions = {
//       from: `"Tours to Tuscany" <${testAccount.user}>`,
//       to,
//       subject,
//       text,
//       html,
//     };

//     const info: SentMessageInfo = await transporter.sendMail(mailOptions);

//     console.log('✅ Message sent: %s', info.messageId);
//     const previewUrl = nodemailer.getTestMessageUrl(info);
//     if (previewUrl) {
//       console.log('📬 Preview URL: %s', previewUrl);
//     }
//   } catch (err) {
//     console.error('❌ Failed to send email:', err);
//     throw err;
//   }
// }
