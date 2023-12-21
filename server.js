const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('Tori');
    const clientsCollection = database.collection('Clients');

   // ... (existing code)

  // Server - /api/submitForm route
  app.post('/api/submitForm', async (req, res) => {
    let client; // Declare the client variable outside the try-catch block
  
    try {
      const formData = req.body;
      console.log('Received form data:', formData);
  
      client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
  
      const database = client.db('Tori');
      const clientsCollection = database.collection('Clients');
  
      const result = await clientsCollection.insertOne(formData);
      console.log('MongoDB Result:', result);
  
      if (result && result.acknowledged && result.insertedId) {
        console.log('Form submitted successfully:', result.insertedId);
        res.status(201).json({ message: 'Form submitted successfully', insertedId: result.insertedId });
      } else {
        console.error('Error submitting form: Invalid result from MongoDB:', result);
        res.status(500).json({ message: 'Internal Server Error', details: 'Failed to process the form submission', result });
      }
    } catch (error) {
      console.error('Error submitting form:', error.message || error);
      console.error('Error stack trace:', error.stack);
      res.status(500).json({ message: 'Internal Server Error', details: 'Failed to process the form submission', error: error.message || error });
    } finally {
      // Close the MongoDB client in the finally block
      if (client) {
        await client.close();
      }
    }
  });
  

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } finally {
    // The client will be closed when the server is stopped
  }
}

startServer();
