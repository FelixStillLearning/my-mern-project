const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || "mongodb+srv://superadmin:superadmin@floralembang.sqo09ky.mongodb.net/?retryWrites=true&w=majority&appName=FloraLembang";

// MongoDB Native Driver Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // Connection timeout settings
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10
});

// Test MongoDB connection
async function testConnection() {
  try {
    // Connect the client to the server with SSL configuration
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged your deployment. You successfully connected to MongoDB!");
    return true;
  } catch (error) {
    console.error("❌ MongoDB connection test failed:", error.message);
    console.error('💡 Possible solutions:');
    console.error('   1. Check internet connection');
    console.error('   2. Verify MongoDB Atlas cluster is running');
    console.error('   3. Check IP whitelist in MongoDB Atlas');
    console.error('   4. Verify credentials in connection string');
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
      // Connection timeout and retry settings
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
      maxPoolSize: 10
    });
    console.log('✅ Mongoose connected successfully to MongoDB');
  } catch (error) {
    console.error('❌ Mongoose connection error:', error);
    console.error('💡 Connection troubleshooting:');
    console.error('   - Check if MongoDB Atlas cluster is running');
    console.error('   - Verify network access and IP whitelist');
    console.error('   - Check username/password credentials');
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
