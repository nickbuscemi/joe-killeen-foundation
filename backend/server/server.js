const express = require('express');
const cors = require('cors');
const {resolve} = require('path');
//const env = require('dotenv').config({path: './.env'});
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
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

app.use(express.static(process.env.STATIC_DIR));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));


// Define your routes
app.post('/submit-form', async (req, res) => {
  // ...
  const { firstName, lastName, phoneNumber, email } = req.body;
  
  try {
    // Check if an entry with the same first name, last name, and email already exists
    const existingEntry = await contactFormData.findOne({ firstName, lastName, phoneNumber, email });

    if (existingEntry) {
      // Entry exists, just respond with a message
      res.status(200).send('Entry already exists, no update made to the database');
    } else {
      // Insert new entry
      await contactFormData.insertOne({ firstName, lastName, phoneNumber, email });
      res.status(200).send('Form data saved successfully');
    }
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


