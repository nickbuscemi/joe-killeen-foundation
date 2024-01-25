const express = require('express');
const cors = require('cors');
const {resolve} = require('path');
//const env = require('dotenv').config({path: './.env'});
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const nodemailer = require('nodemailer');
const app = express();


// MongoDB URI and CLIENT setup
const uri = `mongodb+srv://killeen:${process.env.MONGO_DB_PASS}@joekilleenfoundation.xna8oil.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
  version: ServerApiVersion.v1,
  strict: true,
  deprecationErrors: true
  }
});

// MongoDB connection function
async function connectToMongoDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

const contactFormData = client.db("_joekilleenfoundationDB").collection("_contactformdata");

// nodemailer config
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
      user: process.env.GMAIL_USER, // Your email
      pass: process.env.GMAIL_APP_PASS // Your app password
  }
});



app.use(express.static(process.env.STATIC_DIR));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));


// routes
app.post('/submit-form', async (req, res) => {
    const { firstName, lastName, phoneNumber, email, subject, message } = req.body;

    try {
      // Email to the client
      const clientMailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Confirmation of Your Submission',
        text: `Hello ${firstName},\n\nThank you for reaching out to us. We have received your submission and will get back to you soon.\n\nBest Regards,\nThe Joe Killeen Memorial Foundation.`
      };

      // Email to yourself
      const adminMailOptions = {
        from: email,
        to: process.env.GMAIL_USER, // Your (admin's) email address
        subject: 'New Contact Form Submission',
        text: `New submission received:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\n\nSubject: ${subject}\nMessage: ${message}`
      };

      // Send emails
      transporter.sendMail(clientMailOptions, function(error, info) {
        if (error) {
          console.error('Error sending email to client:', error);
        } else {
          console.log('Confirmation email sent to client: ' + info.response);
        }
      });

      transporter.sendMail(adminMailOptions, function(error, info) {
        if (error) {
          console.error('Error sending email to admin:', error);
        } else {
          console.log('Email sent to admin: ' + info.response);
        }
      });

      // Check if an entry with the same first name, last name, and email already exists
      const existingEntry = await contactFormData.findOne({ firstName, lastName, phoneNumber, email });

      if (!existingEntry) {
        // Insert new entry if it doesn't exist
        await contactFormData.insertOne({ firstName, lastName, phoneNumber, email });
      }

      res.status(200).send('Emails sent and form data processed successfully');
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).send('Error processing your request');
    }
});


app.get('/', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/index.html');
  res.sendFile(path);
});



connectToMongoDB()
  .then(() => {
    app.listen(4242, () => console.log(`Node server listening at http://localhost:4242`));
  })
  .catch(console.dir);


