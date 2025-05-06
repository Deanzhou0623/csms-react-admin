# 🛠 Customer Subscription Management System (CSMS)

> Modded from [React-Admin-UI-V1](https://github.com/fransachmadhw/React-Admin-UI-V1)

A working template for building an internal **Customer Subscription Management System** using React + Zustand + Vite + Mock API.

This repo helps developers understand how to take an open-source React admin UI and **customize it step by step into a functional SaaS-like system** with realistic mock data and structure.

---

## 🎯 Final Goal

* Turn a UI-only template into a **real working admin dashboard**
* All key pages function with Zustand and mock API
* Designed to be later connected to real backend
* Guide others how to replicate the same dev process (0 → 1)

---

## 📦 Tech Stack

* **Frontend**: React + TypeScript + Tailwind + Ant Design
* **State Management**: Zustand
* **Mock API**: Vite + vite-plugin-mock + Mock.js
* **Routing**: React Router v6
* **i18n**: i18next (English default)

---

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/Deanzhou0623/csms-react-admin.git
cd csms-react-admin
npm install
```

### 2. Run Dev Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

### 3. File Structure Highlights

```
csms-react-admin/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── locales/
│   └── App.tsx
├── mock/
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

---

## 🗓 Day-by-Day Customization Guidance

### 📅 Day 1: UI Layout + Routing (Reading coding first!!!!)

* ✅ Replace Sidebar menu items
* ✅ Set up routes for:

  * `/customers`
  * `/subscriptions`
  * `/plans`
  * `/inbox`
  * `/calendar`
* ✅ Each page returns a heading (`<h1>`)

### 📅 Day 2: Setup Mock Data

* ✅ Install `vite-plugin-mock` and `faker`
* ✅ Create `/mock/customers.ts`, `/mock/subscriptions.ts`, `/mock/plans.ts`
* ✅ Generate:

  * 2000 fake customers
  * 5000 fake subscriptions
  * 200 fake plans

### 📅 Day 3: Render Tables with Mock Data

* ✅ Create `CustomerList.tsx` and show AntD `<Table>`
* ✅ Add loading state, empty state
* ✅ Optional: add search bar (local filter)

### 📅 Day 4: Zustand Integration

* ✅ Setup `customerStore.ts`
* ✅ `fetchCustomers()` loads from mock API
* ✅ Bind data to UI via Zustand state

### 📅 Day 5–10: Core Feature Implementation

#### 👥 Customer Management

1. **Customer List Table**

   * Add pagination, filtering by plan/status
   * Click row → go to CustomerDetail page

2. **Customer Detail Page**

   * Show basic info + all subscriptions + contact history
   * Add tabbed layout (`<Tabs>`) for “Profile / Subscriptions / Inbox”

3. **Bulk Action Toolbar**

   * Select multiple customers → send reminder, export data as CSV

#### 💳 Subscription Management

4. **Edit Subscription Plan Form**

   * Modal form to change a customer’s subscription (Plan A → B)

5. **Plan Management Module**

   * Add/Edit/Delete plans (name, price, features\[]) in `/plans`
   * Store plan list in Zustand or load via mock API

6. **Trial Expiry Alerts**

   * Auto-flag subscriptions nearing trial end (based on `endDate`)

#### 📆 Scheduling Features

7. **CSR-Customer Meeting Scheduler**

   * CSR clicks “Schedule” → picks date/time → saves meeting
   * Use `react-big-calendar` or `FullCalendar`

8. **Upcoming Events List**

   * Sidebar card: “Upcoming 3 Meetings” + View All button

#### 📬 Communication / Inbox

9. **Inbox System**

   * CSR and customer message thread UI (support markdown)
   * Mock API: `/api/messages/:customerId` → array of messages

10. **Send Email from UI**

* Simulate email sending form (subject + message)
* Optional: show template dropdown (“Trial Ending”, “Payment Failed”)

#### 📊 Dashboard & Analytics

11. **Metrics Summary**

* Total Active Customers, Cancelled, Trialing
* Create `<MetricCard>` components and show in dashboard

12. **Subscription Trends Chart**

* Use `recharts` or `chart.js`
* Line chart: New subscriptions per month

#### 🔐 Permissions & Access

13. **Role-Based UI Control**

* Admin can see plan settings / analytics
* CSR can only see customer-facing data

14. **Login Mock**

* Add simple role switcher to simulate login (CSR vs Admin)

#### 🌐 Internationalization

15. **Add Chinese Translation File**

* Update `i18n.ts` → switch between English & 中文
* Localize: Dashboard, sidebar, table headers

---

## 📖 Credits

* Base UI: [React-Admin-UI-V1](https://github.com/fransachmadhw/React-Admin-UI-V1)
* Mocking: [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)
* Data Faker: [faker.js](https://github.com/faker-js/faker)

---

## 📬 Future Work Ideas

* Add login & role-based routing
* Export data (CSV)
* Connect to real backend (Node.js / Firebase / Supabase)
* Add unit tests (Jest + RTL)

---

## 🤝 Contributing

PRs welcome. Fork this repo, modify freely, and share your version with others.

---

## 📜 License

MIT — use for commercial or personal projects.
