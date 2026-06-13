# Employee Management CRUD API

A RESTful API for managing employees using Node.js, Express, and Supabase (Postgres).

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root with your Supabase project credentials:
```
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_SECRET_KEY=<your-service-role-secret-key>
```

4. In the Supabase SQL Editor, create the `employees` table:
```sql
create table employees (
  id bigint generated always as identity primary key,
  "firstName" text not null,
  "lastName" text not null,
  email text not null unique,
  phone text,
  department text not null,
  salary numeric not null,
  status text not null default 'ACTIVE' check (status in ('ACTIVE', 'INACTIVE')),
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);
```

5. Start the server:
```bash
npm start
```
Or in development mode with auto-restart:
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
- `?page=1&limit=10` - Paginate results (both must be provided together)

### Get Employee by ID
**GET** `/employees/:id`

**Example:** `/employees/1`

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
│   └── db.js                 # Supabase client configuration
├── controllers/
│   └── employee.controller.js # Business logic
├── services/
│   └── employee.service.js    # Supabase queries
├── routes/
│   └── employee.routes.js     # API routes
├── middlewares/
│   └── errorHandler.js        # Error handling
├── server.js                  # Main application file
├── vercel.json                # Vercel deployment config
├── package.json               # Dependencies
└── README.md                  # Documentation
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Supabase** - Postgres database & client
- **dotenv** - Environment variable loading