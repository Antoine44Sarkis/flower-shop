# 🌸 Flower Shop Website — Built with Next.js

This is a simple, secure flower shop website built with **Next.js**, **MongoDB**, and **Tailwind CSS**. It allows the shop owner to manage products (images, names, and descriptions) via a secure admin interface.

---

## ✨ Features

- ✅ Built with **Next.js App Router**
- 📝 Product entries include **name, description, and image**
- 🔐 Admin-only access to the product upload form using a **password**
- 🧠 Data is stored in **MongoDB** using an `.env.local` URI
- 🖼️ Product images stored **locally** in `/public/uploads` (can be swapped for cloud storage)
- 🎨 Styled with **Tailwind CSS**

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/flower-shop.git
cd flower-shop
2. Install dependencies
bash
Copy code
npm install
# or
yarn install
3. Configure Environment Variables
Create a .env.local file in the root directory and add your MongoDB URI:

env
Copy code
MONGODB_URI=your_mongodb_connection_string
⚠️ You need a MongoDB Atlas account or local MongoDB setup.

🚀 Development
To start the development server:

bash
Copy code
npm run dev
Then open http://localhost:3000 in your browser.

🖼️ Admin Product Upload
Go to the Edit page

Enter the secure password (flowershop by default or u can change it in the code app/components/Formers.tsx search in the function handlesubmit where password === "change here")

Fill out:

Name

Description

Image file

Click Submit

The product will be saved to MongoDB, and the image will be stored locally at /public/uploads.

You can customize where images are stored (e.g., Cloudinary or Firebase) for production hosting.

🌐 Deployment
✅ Recommended: Vercel
Vercel is the best platform to deploy Next.js projects.

Push your code to GitHub

Go to vercel.com/new

Import your GitHub repo

Add your MONGODB_URI environment variable in the project settings

Deploy 🎉

🧠 Technologies Used
Next.js – React Framework for full-stack development

MongoDB – NoSQL Database

Tailwind CSS – Utility-first CSS framework

Firebase / Cloudinary (optional) – For storing images in the cloud

🔐 Security Note
The admin page is protected by a simple hardcoded password (flowershop). For production apps, this should be replaced with real authentication logic.

🧪 Future Improvements
Add full user authentication

Store images in cloud storage (Cloudinary / Firebase)

Add product price and category

Add real-time updates using Socket.IO or Next.js APIs






