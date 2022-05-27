// jshint esverion: 6

const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/assets"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home-page.html");
});

app.get("/Miles", (req, res) => {
  res.sendFile(__dirname + "/assets/html/miles-page.html");
});

app.get("/Infini-T", (req, res) => {
  res.sendFile(__dirname + "/assets/html/infiniti-page.html");
});

app.get("/Ermin-Ripple", (req, res) => {
  res.sendFile(__dirname + "/assets/html/ermin-ripple.html");
});

app.get("/Bolt", (req, res) => {
  res.sendFile(__dirname + "/assets/html/404-not-found.html");
});


app.get("/About-Us", (req, res) => {
  res.sendFile(__dirname + "/assets/html/about-us.html");
});

app.get("/Contact-Us", (req, res) => {
  res.sendFile(__dirname + "/assets/html/contact-us.html");
});

app.get("/Blogs", (req, res) => {
  res.sendFile(__dirname + "/assets/html/404-not-found.html");
});

app.get("/Careers", (req, res) => {
  res.sendFile(__dirname + "/assets/html/404-not-found.html");
});

app.get("/Privacy-Policy", (req, res) => {
  res.sendFile(__dirname + "/assets/html/privacy-policy.html");
});

app.post("/Contact-Us", (req, res) => {

  var htmlBody = `<br> <p><b>From:</b> ${req.body.name}</p><p><b>E-Mail:</b> ${req.body.email}</p><p><b>Phone No:</b> ${req.body.phone}</p><p><b>Message:</b> ${req.body.message}</p>`;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "erminautomotive2022@gmail.com",
      pass: "qamikshsfzwysagf"
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: "erminautomotive2022@gmail.com",
    subject: `Message from Contact-Us Page - ${req.body.email}`,
    html: htmlBody
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  })

});

app.post("/Infini-T", (req, res) => {


  var htmlBody = `<br> <p><b>From:</b> ${req.body.name}</p><p><b>E-Mail:</b> ${req.body.email}</p><p><b>Phone No:</b> ${req.body.phone}</p><p><b>Message:</b> ${req.body.message}</p>`;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "erminautomotive2022@gmail.com",
      pass: "qamikshsfzwysagf"
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: "erminautomotive2022@gmail.com",
    subject: `Message from Infini-T Page - ${req.body.email}`,
    html: htmlBody
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  })

});

app.post("/Ermin-Ripple", (req, res) => {

  var htmlBody = `<br> <p><b>Successfully Signed Up - </b></p><p><b>E-Mail:</b> ${req.body.email}</p>`;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "erminautomotive2022@gmail.com",
      pass: "qamikshsfzwysagf"
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: "erminautomotive2022@gmail.com",
    subject: `Message from Ermin Ripple Page - ${req.body.email}`,
    html: htmlBody
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  })

});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
