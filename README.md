# 🛒Grocery Shopping Web Application

## 📌 Project Overview

Full-stack grocery shopping web application developed using Node.js, Express.js, MongoDB, and Edge.js. The platform provides a complete online grocery shopping experience where users can browse products, search and filter items, add products to their cart, and securely complete purchases using Razorpay payment integration.

The application also includes an admin inventory management system for adding, updating, and deleting grocery products.

---

# 🚀 Features

## 👤 User Features
- User Registration & Login
- Secure Authentication System
- Browse Grocery Products
- Search & Filter Products
- Add Products to Cart
- Update Cart Quantity
- Remove Products from Cart
- Purchase Grocery Items
- View Purchase History
- Responsive User Interface

---

## 🛠️ Admin Features
- Inventory Management Dashboard
- Add New Grocery Products
- Edit Existing Products
- Delete Products
- Upload Product Images
- Monitor Transactions
- Manage Product Inventory

---

# 💳 Payment Integration

The application uses Razorpay Payment Gateway for secure online transactions.

### Payment Features
- Secure Payment Processing
- Order Transaction Handling
- Payment History Tracking

---

# 💻 Technology Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Edge.js

## Frontend
- Bootstrap 4
- HTML5
- CSS3
- jQuery

## Additional Libraries
- bcrypt-nodejs
- express-session
- connect-mongo
- connect-flash
- express-fileupload
- body-parser
- razorpay

---

# 📂 Project Structure

```bash
grocery_app/
│
├── controllers/          # Route Controllers
├── database/
│   └── models/           # MongoDB Models
├── middleware/           # Custom Middleware
├── public/               # Static Assets
│   ├── css/
│   ├── items/
│   └── vendor/
├── views/                # Edge Templates
│   └── layouts/
│
├── gulpfile.js
├── index.js
├── package.json
└── test.js
```

---

# 🗄️ Database Models

## User Model
- Username
- Email
- Password (Hashed)
- Registration Date

## Item Model
- Product Name
- Description
- Price
- Product Image
- Category
- Stock Quantity

## Transaction Model
- User Information
- Purchased Items
- Total Amount
- Payment Status
- Transaction Date

---

# 🔐 Authentication & Security

- Session-based Authentication
- Password Hashing using bcrypt
- Protected Routes
- Secure Session Management
- Flash Message Support

---

# 🛍️ Shopping Features

## Product Browsing
Users can:
- Browse all grocery items
- Search products
- Filter products by category
- View detailed product information

## Shopping Cart
Users can:
- Add items to cart
- Update cart quantity
- Remove products
- Checkout products securely

---

# ⚙️ Installation & Setup

## 📋 Prerequisites

Make sure the following are installed:

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

---

# 🔧 Installation Steps

## Step 1: Clone Repository

```bash
git clone <repository-url>
```

---

## Step 2: Navigate to Project Folder

```bash
cd grocery_app
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

## Step 4: Configure MongoDB

Ensure MongoDB is running locally on:

```bash
mongodb://127.0.0.1:27017/FreshNGreen
```

---

## Step 5: Configure Environment Variables (Optional)

Set:
- SESSION_SECRET
- Razorpay API Keys

---

## Step 6: Start Application

```bash
npm start
```

### Development Mode

```bash
npm run dev
```

---

# 🌐 Access Application

Open browser and visit:

```bash
http://localhost:3000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | / | Homepage |
| GET | /login | Login Page |
| POST | /users/login | User Login |
| GET | /register | Registration Page |
| POST | /users/register | User Registration |
| GET | /item/:id | View Product |
| POST | /items/store | Add Product |
| POST | /items/:id/update | Update Product |
| POST | /items/:id/delete | Delete Product |
| POST | /cart/add | Add To Cart |
| GET | /cart | View Cart |
| POST | /cart/update | Update Cart |
| POST | /purchase | Purchase Items |
| GET | /inventory | Inventory Dashboard |
| GET | /search | Search Products |

---

# 🖼️ Image Upload Support

The application supports:
- Product Image Uploads
- Inventory Product Images
- File Upload Handling using express-fileupload

Uploaded images are stored inside:

```bash
public/items/
```

---

# 🛠️ Development Tools

## Gulp
Used for:
- Task Automation
- Development Workflow

## BrowserSync
Used for:
- Live Reloading
- Faster Development Experience

---

# 📱 Responsive Design

The application is fully responsive and works on:
- Desktop Devices
- Tablets
- Mobile Phones

---

# ✨ Project Highlights

- Full-stack E-commerce Grocery Application
- Secure User Authentication
- Shopping Cart Functionality
- Razorpay Payment Integration
- Inventory Management System
- Product Search & Filtering
- MongoDB Database Integration
- Responsive UI Design

This project demonstrates:
- Full Stack Web Development
- RESTful Routing
- Authentication Systems
- Database Management
- Payment Gateway Integration
- E-commerce Workflow

---
