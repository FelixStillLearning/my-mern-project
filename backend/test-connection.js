require('dotenv').config();
const { testConnection } = require('./config/database');

async function testDatabaseConnection() {
  console.log('🧪 Testing MongoDB connection...');
  console.log('📍 Using URI from environment variables');
  
  const success = await testConnection();
  
  if (success) {
    console.log('✅ Database connection test successful!');
    console.log('🎉 Your MongoDB setup is working correctly!');
  } else {
    console.log('❌ Database connection test failed!');
    console.log('🔧 Please check your MongoDB URI and credentials.');
  }
  
  process.exit(0);
}

testDatabaseConnection();
