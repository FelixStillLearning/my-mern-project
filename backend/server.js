require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectWithMongoose, testConnection } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));

// Connect to MongoDB
async function initializeDatabase() {
  console.log('🔄 Testing MongoDB connection...');
  await testConnection();
  console.log('🔄 Connecting with Mongoose...');
  await connectWithMongoose();
}

// Basic Route
app.get('/', (req, res) => {
  res.json({ 
    message: 'MERN Backend is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    database: 'connected',
    timestamp: new Date().toISOString()
  });
});

// Start the server
async function startServer() {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 Server URL: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
