# Employee Management CRUD API

A RESTful API for managing employees using Node.js, Express, and MongoDB.

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your computer

4. Start the server:
```bash
npm run dev
```

Server will run on: `http://localhost:3000`

## API Endpoints

### Create Employee
**POST** `/employees`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "department": "IT",
  "salary": 50000,
  "status": "ACTIVE"
}
```

### Get All Employees
**GET** `/employees`

**Optional Query Parameters:**
- `?department=IT` - Filter by department
- `?firstName=John` - Search by first name

### Get Employee by ID
**GET** `/employees/:id`

**Example:** `/employees/65abc123def456789`

### Update Employee
**PUT** `/employees/:id`

**Request Body:** (Include only fields you want to update)
```json
{
  "salary": 55000,
  "department": "HR"
}
```

### Delete Employee
**DELETE** `/employees/:id`

## Testing with Postman

1. Open Postman
2. Create a new request
3. Set the method (GET, POST, PUT, DELETE)
4. Enter the URL (e.g., `http://localhost:3000/employees`)
5. For POST/PUT, add JSON data in the Body tab (select raw → JSON)
6. Click Send

## Project Structure
```
employee-api/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   └── employee.controller.js # Business logic
├── models/
│   └── employee.model.js      # Employee schema
├── routes/
│   └── employee.routes.js     # API routes
├── middlewares/
│   └── errorHandler.js        # Error handling
├── server.js                  # Main application file
├── package.json               # Dependencies
└── README.md                  # Documentation
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling