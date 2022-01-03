export default function childSupport(res, req){
  console.log(req.body)
  require('dotenv').config()
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: 'smilecharityuganda@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: "smilecharityuganda@gmail.com",
    to: `${req.body.email}, ssozipaule@gmail.com`,
    subject: 'Thank you for considering child Education Support through Smile Charity Uganda',
    html: `<h1>Thank you for supporting child education with us</h1> \n
    <p>We will keep you updated with our latest news and updates</p>`,
    
  };

  transporter.sendMail(mailOptions, function(error){
    if(error){
      res.status(500).send('Error');
    }
    else{
      res.status(200).send('Success');
    }
  }
  );
}