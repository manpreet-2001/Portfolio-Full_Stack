# Deployment Guide

## Prerequisites

1. **MongoDB Atlas Account**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free cluster
   - Set up database access (username/password)
   - Configure network access (add 0.0.0.0/0 for anywhere access)

2. **GitHub Account**
   - Push your code to GitHub
   - Make sure to include `.gitignore` for `node_modules` and `.env`

## Deployment Options

### Option 1: Render (Recommended - Free Tier)

1. **Sign up at [Render](https://render.com)**
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: `portfolio-admin-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Port**: `4000`

5. **Add Environment Variables:**
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: `4000`

6. **Deploy**

### Option 2: Railway

1. **Sign up at [Railway](https://railway.app)**
2. **Connect your GitHub repository**
3. **Add environment variables:**
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: `4000`

4. **Deploy**

### Option 3: Heroku

1. **Sign up at [Heroku](https://heroku.com)**
2. **Install Heroku CLI**
3. **Create app:**
   ```bash
   heroku create your-app-name
   ```

4. **Set environment variables:**
   ```bash
   heroku config:set MONGODB_URI="your-mongodb-connection-string"
   ```

5. **Deploy:**
   ```bash
   git push heroku main
   ```

## Environment Variables

Create a `.env` file locally (don't commit this):

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=4000
```

## MongoDB Atlas Setup

1. **Create Cluster:**
   - Choose free tier (M0)
   - Select cloud provider and region
   - Click "Create"

2. **Database Access:**
   - Create database user
   - Username: `portfolio-admin`
   - Password: Generate secure password
   - Role: "Read and write to any database"

3. **Network Access:**
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

4. **Get Connection String:**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>`, and `<dbname>` with your values

## Testing Deployment

1. **Test API endpoints:**
   ```
   GET https://your-app-url.railway.app/api/skills
   GET https://your-app-url.railway.app/api/experiences
   ```

2. **Test Admin interface:**
   ```
   https://your-app-url.railway.app/admin
   ```

## Troubleshooting

- **MongoDB Connection Error**: Check your connection string and network access
- **Port Issues**: Make sure PORT environment variable is set correctly
- **Build Errors**: Check that all dependencies are in package.json

## Final Steps

1. **Update README.md** with your deployment URL
2. **Test all functionality** on the deployed version
3. **Submit your GitHub link and deployment URL** 