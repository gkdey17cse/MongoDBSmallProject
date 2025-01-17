# MongoDB Small Project

This is a simple **CRUD (Create, Read, Update, Delete)** application using **Node.js, Express.js, MongoDB, and Mongoose**.  
The project allows users to **create an account**, **store details in a MongoDB database**, **view all users**, **update user details**, and **delete users**.  

## Features
- **Home Page**: Users can enter their details to create an account.
- **Read Page**: Displays all user details stored in the database.
- **Update & Delete**: Users can update their details or delete their accounts.

## Technologies Used
- **Node.js**  
- **Express.js**  
- **MongoDB & Mongoose**  
- **EJS (Embedded JavaScript for templating)**  
- **Nodemon (for auto-restarting the server during development)**  

---

## 📂 Folder Structure
```
MongoDBSmallProject/
│── models/             # Mongoose schemas/models
│   ├── userCollection.js  
│
│── public/             # Static files (CSS, JS, Images)
│   ├── images/  
│   ├── javascripts/  
│   ├── stylesheets/  
│
│── views/              # EJS template files
│   ├── edit.ejs  
│   ├── index.ejs  
│   ├── read.ejs  
│
│── node_modules/       # Installed dependencies
│── app.js              # Main Express.js server file
│── package.json        # Project metadata and dependencies
│── package-lock.json   # Version-lock for dependencies
```

---

## 🚀 Installation & Usage

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/gkdey17cse/MongoDBSmallProject.git
cd MongoDBSmallProject
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Server**
```sh
npm start
```
or, if using Nodemon (for development)
```sh
nodemon app.js
```

### **4️⃣ Open the Application**
Go to your browser and visit:
```
http://localhost:3000
```

---

## 📌 API & Functionalities
- **Create User:** Users can register by entering their details.
- **Read Users:** View all registered users.
- **Update User:** Modify user information.
- **Delete User:** Remove a user from the database.

---

## 🛠 Dependencies (from `package.json`)
| Package   | Version |
|-----------|---------|
| ejs       | 3.1.10  |
| express   | 4.21.2  |
| mongoose  | 8.9.5   |
| nodemon   | 3.1.9   |

---

## 🤝 Contributing
Feel free to fork the repository and submit pull requests. Any contributions are welcome!

---

## 📜 License
This project is licensed under the **ISC License**.

---

## 🧑‍💻 Author
**Gour Krishna Dey**  
📧 gour24035@iiitd.ac.in
🔗 [GitHub](https://github.com/gkdey17cse)

---

### ✅ If you find this project helpful, consider ⭐ starring the repo!

