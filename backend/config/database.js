const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || "mongodb+srv://superadmin:superadmin@floralembang.sqo09ky.mongodb.net/?retryWrites=true&w=majority&appName=FloraLembang";

// MongoDB Native Driver Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Test MongoDB connection
async function testConnection() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged your deployment. You successfully connected to MongoDB!");
    return true;
  } catch (error) {
    console.error("❌ MongoDB connection test failed:", error);
    return false;
  } finally {
    // Close the connection
    await client.close();
  }
}

// Mongoose connection
async function connectWithMongoose() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Mongoose connected successfully to MongoDB');
  } catch (error) {
    console.error('❌ Mongoose connection error:', error);
    process.exit(1);
  }
}

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('📡 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('📡 Mongoose disconnected from MongoDB');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('📡 Mongoose connection closed through app termination');
  process.exit(0);
});

module.exports = {
  connectWithMongoose,
  testConnection,
  client,
  mongoose
};
