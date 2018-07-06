const sgMail = require("@sendgrid/mail");


exports.sendMail = function(mail) {

  sgMail.setApiKey(process.env.SG_KEY);
  
  const message = {
    to: 'seejoshcode@gmail.com',
    from: mail.email,
    subject: `A message from ${mail.firstName} ${ mail.lastName}. Sent from RCollins.com `,
    replyTo: mail.email,
    text: mail.message
  };

  return sgMail.send(message).catch(err => {
    if (err) {
      return console.error(err.toString());
    }
  })
};
