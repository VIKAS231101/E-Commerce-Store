# 🛒 E-Commerce Website

A full-stack e-commerce web application built with the **MERN stack** — featuring product browsing, cart management, and secure payments powered by **Stripe**.


---

## ✨ Features

- 🛍️ Browse a catalog of products
- ➕ Add products to cart & manage quantities
- 💳 Secure checkout with **Stripe** payment integration
- 📦 Order flow from product selection to purchase confirmation
- ⚡ Fast, responsive UI built with React

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Payments | Stripe API |
| Styling | CSS / Tailwind (update as needed) |

---

## 📂 Project Structure

```
E-Commerce/
│
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Product, Cart, Checkout pages
│   │   └── App.js
│   └── package.json
│
├── backend/                  # Node.js + Express server
│   ├── routes/               # API routes
│   ├── models/               # Mongoose models
│   ├── controllers/          # Business logic
│   ├── middleware/           # Auth, error handling
│   └── server.js
│
├── .env                      # Environment variables
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/VIKAS231101/E-Commerce-Store.git
cd e-commerce
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
```

Start the backend server:

```bash
npm run dev
```

Backend runs on: http://localhost:5000

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
```

Start the frontend:

```bash
npm start
```

Frontend runs on: http://localhost:3000

---

## 💳 Stripe Integration

This app uses [Stripe](https://stripe.com) for secure payment processing.

To test payments locally, use Stripe's test card:

```
Card Number : 4242 4242 4242 4242
Expiry      : Any future date (e.g. 12/29)
CVC         : Any 3 digits
ZIP         : Any 5 digits
```

> ⚠️ Never commit your real Stripe secret key — always keep it in `.env`

---

## 🔌 API Endpoints

### Products
```
GET    /api/products          # Get all products
GET    /api/products/:id      # Get single product
```

### Cart
```
POST   /api/cart              # Add to cart
PUT    /api/cart/:id          # Update quantity
DELETE /api/cart/:id          # Remove from cart
```

### Orders & Payment
```
POST   /api/orders            # Create order
POST   /api/payment/checkout  # Stripe checkout session
```

---

## 🛡️ Security Practices

- API keys and secrets stored in `.env` — never hardcoded
- `.gitignore` prevents `.env` from being committed
- Stripe handles all sensitive card data — no card info touches your server
- CORS configured for allowed origins only

---

## 🚀 Future Improvements

- 🔐 User authentication & order history
- 🔍 Product search & category filters
- ⭐ Product reviews & ratings
- 📦 Admin dashboard for managing products & orders
- 🐳 Docker deployment
- 📧 Order confirmation emails

---

## 👤 Author

**VIKAS231101** — [GitHub](https://github.com/VIKAS231101)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
