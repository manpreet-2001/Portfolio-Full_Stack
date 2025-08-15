# Portfolio Admin Backend

A Node.js Express application with MongoDB for managing portfolio data including skills and experiences.

## Features

- **MongoDB Collections**: Skills and Experiences
- **Admin Dashboard**: Pug template-based admin interface
- **CRUD Operations**: Create, Read, Update, Delete for all collections
- **REST API**: JSON endpoints for frontend consumption
- **Responsive Design**: Mobile-friendly admin interface

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   PORT=4000
   ```

3. **MongoDB Setup**:
   - Create a MongoDB Atlas account
   - Create a new cluster
   - Add your IP to Network Access (or use 0.0.0.0/0 for anywhere)
   - Create a database user
   - Get your connection string

4. **Run the application**:
   ```bash
   npm run dev    # Development mode with nodemon
   npm start      # Production mode
   ```

## API Endpoints

- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

- `GET /api/experiences` - Get all experiences
- `POST /api/experiences` - Create a new experience
- `PUT /api/experiences/:id` - Update an experience
- `DELETE /api/experiences/:id` - Delete an experience

## Admin Routes

- `/admin/skills` - Manage skills
- `/admin/experiences` - Manage experiences

## Data Models

### Skill
- name (required)
- level (Beginner, Intermediate, Expert)
- timestamps

### Experience
- title (required)
- company
- startDate
- endDate
- description
- timestamps

## Deployment

The application is designed to be deployed to platforms like:
- Heroku
- Railway
- Render
- DigitalOcean App Platform

Make sure to set the `MONGODB_URI` environment variable in your deployment platform.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Pug template engine
- Method-override for PUT/DELETE requests 