# MERN Backend with MongoDB Atlas

This backend is configured to work with your MongoDB Atlas cluster using both the native MongoDB driver and Mongoose.

## Setup

### 1. Environment Variables
The `.env` file contains your MongoDB connection string:
```
PORT=5000
MONGODB_URI=mongodb+srv://superadmin:superadmin@floralembang.sqo09ky.mongodb.net/?retryWrites=true&w=majority&appName=FloraLembang
```

### 2. Database Configuration
- **File**: `config/database.js`
- **Features**:
  - Native MongoDB driver connection test
  - Mongoose connection with proper error handling
  - Graceful shutdown handling
  - Connection event logging

### 3. Models
- **File**: `models/User.js`
- **Features**:
  - User schema with validation
  - Instance and static methods
  - Pre-save middleware
  - Indexes for performance

### 4. Routes
- **File**: `routes/users.js`
- **Endpoints**:
  - `GET /api/users` - Get all users
  - `GET /api/users/:id` - Get user by ID
  - `GET /api/users/status/active` - Get active users only
  - `POST /api/users` - Create new user
  - `PUT /api/users/:id` - Update user
  - `DELETE /api/users/:id` - Delete user

## Running the Application

### Install Dependencies
```bash
npm install
```

### Test Database Connection
```bash
npm run test-connection
```

### Start Development Server
```bash
npm run dev
```

### Start Production Server
```bash
npm start
```

## API Usage Examples

### Create a User
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }'
```

### Get All Users
```bash
curl http://localhost:5000/api/users
```

### Get User by ID
```bash
curl http://localhost:5000/api/users/<user-id>
```

### Update User
```bash
curl -X PUT http://localhost:5000/api/users/<user-id> \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "age": 25
  }'
```

### Delete User
```bash
curl -X DELETE http://localhost:5000/api/users/<user-id>
```

## Database Features

### Connection Testing
The application includes both native MongoDB driver and Mongoose connections:
- **Native Driver**: Used for connection testing and admin operations
- **Mongoose**: Used for application data operations with schemas

### Error Handling
- Validation errors return detailed messages
- Duplicate email detection
- Proper HTTP status codes
- Database connection error handling

### Logging
- Connection status logging
- Request/response logging
- Error logging with context

## Project Structure
```
backend/
├── config/
│   └── database.js          # Database connection configuration
├── models/
│   └── User.js             # User model with Mongoose schema
├── routes/
│   └── users.js            # User CRUD routes
├── .env                    # Environment variables
├── server.js              # Main server file
├── test-connection.js     # Database connection test
└── package.json           # Dependencies and scripts
```

## Security Considerations

### Environment Variables
- MongoDB credentials are stored in `.env` file
- Never commit `.env` to version control
- Use strong passwords for production

### Validation
- Input validation on all user data
- Email format validation
- String length limits
- Age range validation

### Error Handling
- Sensitive information not exposed in error responses
- Proper HTTP status codes
- Validation error details for development

## Next Steps

1. **Authentication**: Add JWT-based authentication
2. **Middleware**: Add request logging and rate limiting
3. **Testing**: Add unit and integration tests
4. **Documentation**: Add Swagger/OpenAPI documentation
5. **Deployment**: Configure for production deployment

## Troubleshooting

### Connection Issues
1. Check if MongoDB Atlas cluster is running
2. Verify IP whitelist includes your current IP
3. Confirm credentials are correct
4. Test connection with `npm run test-connection`

### Port Issues
- Default port is 5000
- Change PORT in `.env` if needed
- Ensure port is not in use by other applications

### Dependency Issues
- Run `npm install` to install all dependencies
- Check Node.js version compatibility
- Clear npm cache if needed: `npm cache clean --force`
