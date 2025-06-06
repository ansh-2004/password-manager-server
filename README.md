```markdown
# 🛡️ Password Manager - Backend

This is the backend of the Password Manager application built using **Node.js, Express.js, and MongoDB**. It provides REST APIs to securely store, retrieve, update, and delete credentials.

## 📌 Features

- 🔐 Store website credentials (website, username, password).
- 🔒 Passwords are securely stored in MongoDB.
- 🔎 Get all credentials or search by website.
- 🗑️ Delete and update credentials.
- 🌐 CORS-enabled API for frontend interaction.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv (for env vars)
- cors
- body-parser

## 📦 Installation

```bash
git clone https://github.com/yourusername/password-manager.git
cd password-manager/server
npm install
⚙️ Setup Environment
Create a .env file in server/:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
▶️ Start Server
bash
Copy
Edit
npm start
API will be available at http://localhost:5000

📁 API Endpoints
Method	Endpoint	Description
GET	/api/credentials	Get all credentials
POST	/api/credentials	Add a new credential
PUT	/api/credentials/:id	Update a credential
DELETE	/api/credentials/:id	Delete a credential
