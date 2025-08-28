<p align="center">
  <img src="https://raw.githubusercontent.com/haianhng31/Powerpuff-girls/main/frontend/src/Images/powerpuffLogo.png" width="150" alt="Powerpuff Logo" />
</p>

*A safe and empowering space by women, for women.*
---

## 🌟 About Powerpuff

Powerpuff is a full-stack web platform built to empower women globally. It features a rich archive of blogs, resources, and tools curated around **health**, **travel**, and **safety**. Whether you’re exploring new cities or looking for the best self-care app, Powerpuff brings it all to one welcoming hub.

> 🛡️ Includes a real-time **Safety Map**  
> ✍️ Submit your own **recommendations**  
> 👩‍💻 Built with **MERN**, deployed on **Render**, using **Supabase** Auth  
> 🌐 MongoDB Atlas for persistent data

---

## 🎯 Mission

**Powerpuff** was created to:

- Provide a safe, informative platform for women.
- Highlight and centralize travel safety, mental/physical health, and lifestyle content.
- Empower users through community-sourced recommendations.
- Celebrate women’s voices and stories around the world.

---

## 📚 Features

| Feature | Description |
|--------|-------------|
| 🗺️ **Interactive Safety Map** | Green = Safe, Orange = Moderate, Red = Unsafe |
| 📖 **Curated Blog Archive** | Topics in health, travel, and women’s issues |
| 📱 **Top Resources** | User-vetted apps, books, and products for women |
| ✍️ **Submit a Recommendation** | Share your favorites (apps, books, or products) |
| 🔒 **Supabase Authentication** | Log in/sign up to access more features |
| 🧑‍⚖️ **Admin Approval** | All submissions go through moderation before publishing |

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js + Tailwind CSS |
| **Backend** | Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Supabase |
| **Deployment** | Render |

---

## 🔐 Authentication

- Powered by **Supabase**
- Only logged-in users can submit content
- Articles require **admin approval** before being visible
- Admins are authenticated via environment variable:  
  `REACT_APP_ADMIN_EMAIL=admin@example.com`

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/haianhng31/Powerpuff-girls.git
cd Powerpuff-girls

