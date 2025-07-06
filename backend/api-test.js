// Simple API test file
// Run this with: node api-test.js (make sure server is running first)

const BASE_URL = 'http://localhost:5000';

// Test data
const testUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30
};

// Helper function to make HTTP requests
async function makeRequest(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error('Request failed:', error.message);
    return { status: 500, data: { error: error.message } };
  }
}

// Test functions
async function testHealthCheck() {
  console.log('🏥 Testing health check...');
  const result = await makeRequest(`${BASE_URL}/health`);
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  console.log('---');
}

async function testCreateUser() {
  console.log('👤 Testing create user...');
  const result = await makeRequest(`${BASE_URL}/api/users`, {
    method: 'POST',
    body: JSON.stringify(testUser)
  });
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  console.log('---');
  
  if (result.data.data && result.data.data._id) {
    return result.data.data._id;
  }
  return null;
}

async function testGetAllUsers() {
  console.log('📋 Testing get all users...');
  const result = await makeRequest(`${BASE_URL}/api/users`);
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  console.log('---');
}

async function testGetUser(userId) {
  if (!userId) return;
  
  console.log('🔍 Testing get user by ID...');
  const result = await makeRequest(`${BASE_URL}/api/users/${userId}`);
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  console.log('---');
}

async function testUpdateUser(userId) {
  if (!userId) return;
  
  console.log('✏️ Testing update user...');
  const updateData = { name: 'Jane Doe', age: 25 };
  const result = await makeRequest(`${BASE_URL}/api/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData)
  });
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  console.log('---');
}

async function testDeleteUser(userId) {
  if (!userId) return;
  
  console.log('🗑️ Testing delete user...');
  const result = await makeRequest(`${BASE_URL}/api/users/${userId}`, {
    method: 'DELETE'
  });
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  console.log('---');
}

// Run all tests
async function runAllTests() {
  console.log('🧪 Starting API Tests...\n');
  
  try {
    await testHealthCheck();
    await testGetAllUsers();
    
    const userId = await testCreateUser();
    await testGetUser(userId);
    await testUpdateUser(userId);
    await testDeleteUser(userId);
    
    console.log('✅ All tests completed!');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Check if fetch is available (Node.js 18+)
if (typeof fetch === 'undefined') {
  console.log('❌ This test requires Node.js 18+ for fetch API');
  console.log('💡 Alternative: Use curl commands from README.md');
  process.exit(1);
}

runAllTests();
