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

## 📋 Requirements

### System Requirements
- **Operating System**: Windows 10/11, macOS 10.14+, or Linux (Ubuntu 18.04+)
- **RAM**: Minimum 4GB, Recommended 8GB+
- **Storage**: At least 2GB free space
- **Internet**: Required for package installation and MongoDB Atlas

### Software Requirements

#### Node.js
- **Version**: 16.0.0 or higher (LTS recommended)
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Verify**: `node --version` and `npm --version`

#### MongoDB
- **Local Installation**: MongoDB Community Server 5.0+
- **Cloud Alternative**: MongoDB Atlas (free tier available)
- **Download**: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

#### Git
- **Version**: 2.30.0 or higher
- **Download**: [https://git-scm.com/](https://git-scm.com/)
- **Verify**: `git --version`

#### Code Editor (Recommended)
- **VS Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Extensions**: ES7+ React/Redux/React-Native snippets, Prettier, ESLint

## 🚀 Quick Start

### Prerequisites Installation

1. **Install Node.js**
   ```bash
   # Windows: Download installer from nodejs.org
   # macOS: brew install node
   # Linux: sudo apt install nodejs npm
   
   # Verify installation
   node --version  # Should show v16.0.0 or higher
   npm --version   # Should show 8.0.0 or higher
   ```

2. **Install MongoDB**
   ```bash
   # Windows: Download installer from mongodb.com
   # macOS: brew install mongodb-community
   # Linux: sudo apt install mongodb
   
   # Start MongoDB service
   # Windows: MongoDB runs as a service
   # macOS: brew services start mongodb-community
   # Linux: sudo systemctl start mongodb
   ```

3. **Install Git**
   ```bash
   # Windows: Download installer from git-scm.com
   # macOS: brew install git
   # Linux: sudo apt install git
   
   # Verify installation
   git --version
   ```

### Project Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manpreet-2001/Portfolio-Full_Stack.git
   cd Portfolio-Full_Stack
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

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Database Configuration
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio

# Server Configuration
PORT=4000

# Optional: MongoDB Atlas (for production)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

### Package Dependencies

#### Backend Dependencies
```json
{
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "pug": "^3.0.2",
  "cors": "^2.8.5",
  "method-override": "^3.0.0",
  "dotenv": "^16.3.1"
}
```

#### Frontend Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.15.0",
  "axios": "^1.5.0"
}
```

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

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Backend Issues
1. **Port Already in Use**
   ```bash
   # Windows
   netstat -ano | findstr :4000
   taskkill /PID <PID> /F
   
   # macOS/Linux
   lsof -i :4000
   kill -9 <PID>
   ```

2. **MongoDB Connection Failed**
   ```bash
   # Check if MongoDB is running
   # Windows: Services > MongoDB
   # macOS: brew services list | grep mongodb
   # Linux: sudo systemctl status mongodb
   ```

3. **Module Not Found Errors**
   ```bash
   cd backend
   rm -rf node_modules package-lock.json
   npm install
   ```

#### Frontend Issues
1. **Port 3000 Already in Use**
   ```bash
   # React will automatically suggest another port
   # Or manually specify:
   PORT=3001 npm start
   ```

2. **Build Errors**
   ```bash
   cd portfolio-frontend
   npm run build
   # Check for specific error messages
   ```

3. **API Connection Issues**
   - Ensure backend is running on port 4000
   - Check CORS configuration
   - Verify API endpoints in browser console

### Performance Optimization

#### Development
- Use `npm run dev` for backend (if nodemon is configured)
- Enable React Fast Refresh
- Use browser DevTools for debugging

#### Production
- Set `NODE_ENV=production`
- Use `npm run build` for React
- Enable compression middleware
- Use environment-specific MongoDB connections

### Security Considerations

#### Environment Variables
- Never commit `.env` files
- Use strong MongoDB passwords
- Enable authentication for production databases

#### API Security
- Implement rate limiting
- Add input validation
- Use HTTPS in production
- Enable CORS only for necessary origins

## 📚 Additional Resources

### Documentation
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

### Learning Resources
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [React Patterns](https://reactpatterns.com/)
- [MongoDB University](https://university.mongodb.com/)

### Community
- [Stack Overflow](https://stackoverflow.com/)
- [GitHub Discussions](https://github.com/manpreet-2001/Portfolio-Full_Stack/discussions)
- [Discord Developer Community](https://discord.gg/developers)

---

⭐ **Star this repository if you found it helpful!**

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