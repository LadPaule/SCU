require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {
  const { email, fullName, country, postalAddress, modeOfSupport } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.smilecharityuganda.org",
    port: 465,
    service: "webmail",
    auth: {
      user: process.env.NEXT_EMAIL,
      pass: process.env.NEXT_EMAIL_PASSWORD,
    },
    secure: false,
    tls: {
      rejectUnauthorized: false,
    }
  });

  const mailOptions = {
    from: "info@smilecharityuganda.org",
    to: `${email}, ssozipaule@gmail.com`,
    subject: `Thank you ${fullName} for considering child Education Support through Smile Charity Uganda`,
    html: `<h1>Dear ${fullName}, Thank you for supporting child education with us</h1> \n
    <p>Brief Summary of Data</p>
    <h2> your email address: ${email}</h2>
    <h2> your email address: ${modeOfSupport}</h2>
    <h2> your country: ${country}</h2>
    <h2> your postal address: ${postalAddress}</h2>`,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent!");

    }
  });
  res.redirect(200, "/http://localhost:3000/");

  if(res.statusCode === 200) {
    res.send("Thank you for your support");
  }else {
    res.send("Sorry, something went wrong");
  }
};
