# 🚀 Portfolio Website - Manpreet Singh

A modern, responsive portfolio website built with **React** frontend and **Node.js** backend, featuring dynamic content management through an admin portal.

## ✨ Features

### Frontend (React)
- **Responsive Design**: Mobile-first approach with modern CSS
- **Dynamic Content**: Fetches data from backend API
- **Modern UI**: Glassmorphism effects, gradients, and animations
- **Component-Based**: Modular React components for maintainability

### Backend (Node.js + Express)
- **RESTful API**: JSON endpoints for skills, experiences, and projects
- **Admin Portal**: Pug template-based admin interface
- **MongoDB Integration**: Mongoose ODM for data persistence
- **CRUD Operations**: Full Create, Read, Update, Delete functionality

### Database Collections
- **Skills**: Technical skills with proficiency levels
- **Experiences**: Work history and professional experience
- **Projects**: Portfolio projects with technologies and links

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios for HTTP requests
- Modern CSS (Grid, Flexbox, Animations)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Pug template engine
- Method-override for RESTful forms

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file
   echo "MONGODB_URI=mongodb://127.0.0.1:27017/portfolio" > .env
   echo "PORT=4000" >> .env
   
   # Start backend server
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd portfolio-frontend
   npm install
   npm start
   ```

4. **Access the Application**
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:4000
   - **Admin Portal**: http://localhost:4000/admin

## 📁 Project Structure

```
portfolio-website/
├── backend/                 # Node.js backend
│   ├── controllers/        # API controllers
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── views/             # Pug templates
│   ├── public/            # Static files
│   └── index.js           # Main server file
├── portfolio-frontend/     # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── App.css        # Global styles
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experiences
- `GET /api/experiences` - Get all experiences
- `POST /api/experiences` - Create new experience
- `PUT /api/experiences/:id` - Update experience
- `DELETE /api/experiences/:id` - Delete experience

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## 🎨 Admin Portal

Access the admin portal at `http://localhost:4000/admin` to:
- **Manage Skills**: Add/edit/delete technical skills
- **Manage Experiences**: Add/edit/delete work experience
- **Manage Projects**: Add/edit/delete portfolio projects

## 🌐 Deployment

### Backend Deployment
- **Render**: Free tier available
- **Railway**: Easy deployment
- **Heroku**: Traditional choice

### Frontend Deployment
- **Vercel**: Recommended for React apps
- **Netlify**: Great alternative
- **GitHub Pages**: Free hosting

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
PORT=4000
```

For production, use MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=4000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manpreet Singh**
- Full Stack Web Developer
- Passionate about clean code and modern design
- Always learning and exploring new technologies

## 🙏 Acknowledgments

- React.js community for the amazing framework
- Node.js and Express.js for robust backend
- MongoDB for flexible data storage
- All the open-source contributors who made this possible

---

⭐ **Star this repository if you found it helpful!** 