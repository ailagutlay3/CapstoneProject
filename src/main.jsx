import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const students = [
  {
    id: "2026-001",
    name: "Juan Dela Cruz",
    course: "BSIT",
    year: "2nd Year",
    status: "Active",
  },
  {
    id: "2026-002",
    name: "Maria Santos",
    course: "BSCS",
    year: "1st Year",
    status: "Active",
  },
  {
    id: "2026-003",
    name: "Mark Reyes",
    course: "BSBA",
    year: "3rd Year",
    status: "Inactive",
  },
  {
    id: "2026-004",
    name: "Angela Garcia",
    course: "BSED",
    year: "4th Year",
    status: "Active",
  },
];

function App() {
  const [page, setPage] = useState("login");
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    setPage("dashboard");
  };

  // LOGOUT
  const handleLogout = () => {
    setPage("login");
    setUsername("");
    setPassword("");
    setActiveMenu("Dashboard");
  };

  // ========================================
  // LOGIN PAGE
  // ========================================

  if (page === "login") {
    return (
      <div className="auth-page">
        <div className="auth-card">

          {/* LOGO / BRAND */}

          <div className="brand">
            <div className="brand-logo">
              C
            </div>

            <div>
              <h1>CCDI</h1>
              <span>CCDI Portal</span>
            </div>
          </div>

          {/* LOGIN HEADING */}

          <div className="auth-heading">

            <p className="eyebrow">
              STUDENT ACCOUNT MANAGEMENT SYSTEM FOR COMPUTER COMMUNICATION DEVELOPMENT INSTITUTE
            </p>

            <p>
              Log in.
            </p>

          </div>

          {/* LOGIN FORM */}

          <form onSubmit={handleLogin}>

            {/* USERNAME */}

            <label>
              Username
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                👤
              </span>

              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                required
              />

            </div>

            {/* PASSWORD */}

            <label>
              Password
            </label>

            <div className="input-wrapper">

              <span className="input-icon">
                🔒
              </span>

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            {/* OPTIONS */}

            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="forgot-password"
              >
                Forgot password?
              </button>

            </div>

            {/* LOGIN BUTTON */}

            <button
              className="primary-button"
              type="submit"
            >
              Login
            </button>

          </form>

          {/* DIVIDER */}

          <div className="divider">
            <span>or</span>
          </div>

          {/* REGISTER */}

          <p className="register-text">

            Don't have an account?

            <button
              className="link-button"
              onClick={() =>
                setPage("register")
              }
            >
              Register
            </button>

          </p>

          {/* SECURITY */}

          <p className="security-message">
            🔐 Your account information is
            securely protected.
          </p>

        </div>
      </div>
    );
  }

  // ========================================
  // REGISTER PAGE
  // ========================================

  if (page === "register") {
    return (
      <div className="auth-page">

        <div className="auth-card register-card">

          {/* BACK */}

          <button
            className="back-button"
            onClick={() =>
              setPage("login")
            }
          >
            ← Back to Login
          </button>

          {/* BRAND */}

          <div className="brand">

            <div className="brand-logo">
              C
            </div>

            <div>
              <h1>CCDI</h1>
              <span>CCDI Portal</span>
            </div>

          </div>

          {/* REGISTER HEADING */}

          <div className="auth-heading">

            <p className="eyebrow">
              CREATE ACCOUNT
            </p>

            <p>
              Fill in your details to create
              a student account.
            </p>

          </div>

          {/* FIRST / LAST NAME */}

          <div className="two-column">

            <div>

              <label>
                First Name
              </label>

              <input
                className="normal-input"
                placeholder="First name"
              />

            </div>

            <div>

              <label>
                Last Name
              </label>

              <input
                className="normal-input"
                placeholder="Last name"
              />

            </div>

          </div>

          {/* STUDENT ID */}

          <label>
            Student ID
          </label>

          <input
            className="normal-input"
            placeholder="e.g. 2026-001"
          />

          {/* EMAIL */}

          <label>
            Email Address
          </label>

          <input
            className="normal-input"
            type="email"
            placeholder="student@example.com"
          />

          {/* PASSWORD */}

          <label>
            Password
          </label>

          <input
            className="normal-input"
            type="password"
            placeholder="Create a password"
          />

          {/* CREATE ACCOUNT */}

          <button
            className="primary-button register-button"
            onClick={() =>
              setPage("login")
            }
          >
            Create Account
          </button>

          {/* LOGIN LINK */}

          <p className="register-text">

            Already have an account?

            <button
              className="link-button"
              onClick={() =>
                setPage("login")
              }
            >
              Login
            </button>

          </p>

        </div>

      </div>
    );
  }

  // ========================================
  // DASHBOARD
  // ========================================

  const menuItems = [
    "Dashboard",
    "Students",
    "Accounts",
    "Reports",
    "Settings",
  ];

  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="sidebar-brand">

          <div className="brand-logo">
            C
          </div>

          <div>
            <strong>
              CCDI
            </strong>

            <small>
              CCDI Portal
            </small>
          </div>

        </div>

        {/* ADMIN PROFILE */}

        <div className="admin-profile">

          <div className="admin-avatar">
            AD
          </div>

          <div>

            <strong>
              Admin User
            </strong>

            <small>
              Administrator
            </small>

          </div>

        </div>

        {/* NAVIGATION */}

        <nav>

          <p className="navigation-title">
            MAIN MENU
          </p>

          {menuItems.map((item) => (

            <button
              key={item}
              className={
                activeMenu === item
                  ? "navigation-item active"
                  : "navigation-item"
              }
              onClick={() =>
                setActiveMenu(item)
              }
            >

              <span className="navigation-icon">

                {item === "Dashboard" && "⌂"}
                {item === "Students" && "♙"}
                {item === "Accounts" && "▣"}
                {item === "Reports" && "▤"}
                {item === "Settings" && "⚙"}

              </span>

              {item}

            </button>

          ))}

        </nav>

        {/* LOGOUT */}

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          ↪ Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}

      <main className="main-content">

        {/* TOPBAR */}

        <header className="topbar">

          <div>

            <p className="eyebrow">
              STUDENT ACCOUNT MANAGEMENT SYSTEM for Computer Communication Development Institute
            </p>

            <h1>
              {activeMenu}
            </h1>

          </div>

          <div className="topbar-right">

            <button className="notification-button">
              🔔
            </button>

            <div className="mini-profile">

              <span>
                AD
              </span>

              <strong>
                Admin User
              </strong>

            </div>

          </div>

        </header>

        {/* DASHBOARD */}

        {activeMenu === "Dashboard" && (
          <>

            {/* WELCOME CARD */}

            <section className="welcome-card">

              <div>

                <h2>
                  Good day, Admin! 👋
                </h2>

                <p>
                  Here is an overview of the
                  student account system.
                </p>

              </div>

              <button
                className="white-button"
                onClick={() =>
                  setActiveMenu("Students")
                }
              >
                View Students
              </button>

            </section>

            {/* STATISTICS */}

            <section className="statistics-grid">

              <StatCard
                icon="♙"
                title="Total Students"
                value="248"
              />

              <StatCard
                icon="✓"
                title="Active Accounts"
                value="231"
              />

              <StatCard
                icon="◷"
                title="Pending Accounts"
                value="12"
              />

              <StatCard
                icon="⊘"
                title="Inactive Accounts"
                value="5"
              />

            </section>

            {/* DASHBOARD GRID */}

            <section className="dashboard-grid">

              {/* RECENT STUDENTS */}

              <div className="panel students-panel">

                <div className="panel-header">

                  <div>

                    <h3>
                      Recent Students
                    </h3>

                    <p>
                      Latest student accounts
                    </p>

                  </div>

                  <button
                    className="outline-button"
                    onClick={() =>
                      setActiveMenu("Students")
                    }
                  >
                    View All
                  </button>

                </div>

                <StudentTable />

              </div>

              {/* ACCOUNT ACTIVITY */}

              <div className="panel">

                <div className="panel-header">

                  <div>

                    <h3>
                      Account Activity
                    </h3>

                    <p>
                      Recent system actions
                    </p>

                  </div>

                </div>

                <div className="activity-list">

                  <Activity
                    icon="✓"
                    text="New student account created"
                    time="10 minutes ago"
                  />

                  <Activity
                    icon="↻"
                    text="Password updated"
                    time="32 minutes ago"
                  />

                  <Activity
                    icon="✓"
                    text="Account verified"
                    time="1 hour ago"
                  />

                  <Activity
                    icon="!"
                    text="Pending account review"
                    time="2 hours ago"
                  />

                </div>

              </div>

            </section>

          </>
        )}

        {/* STUDENTS PAGE */}

        {activeMenu === "Students" && (

          <section className="panel page-panel">

            <div className="panel-header">

              <div>

                <h3>
                  Student Accounts
                </h3>

                <p>
                  Manage registered student accounts.
                </p>

              </div>

              <button
                className="primary-button small-button"
              >
                + Add Student
              </button>

            </div>

            {/* SEARCH */}

            <div className="search-row">

              <input
                className="normal-input"
                placeholder="🔎 Search student..."
              />

              <select>

                <option>
                  All Status
                </option>

                <option>
                  Active
                </option>

                <option>
                  Inactive
                </option>

              </select>

            </div>

            <StudentTable />

          </section>

        )}

        {/* OTHER PAGES */}

        {activeMenu !== "Dashboard" &&
          activeMenu !== "Students" && (

            <section className="panel empty-panel">

              <div className="empty-icon">
                ▣
              </div>

              <h2>
                {activeMenu}
              </h2>

              <p>
                This section is ready for
                your next module.
              </p>

            </section>

          )}

      </main>

    </div>
  );
}

// ========================================
// STAT CARD
// ========================================

function StatCard({
  icon,
  title,
  value,
}) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>

        <p>
          {title}
        </p>

        <h2>
          {value}
        </h2>

      </div>

      <span className="trend">
        +4.2%
      </span>

    </div>
  );
}

// ========================================
// ACTIVITY
// ========================================

function Activity({
  icon,
  text,
  time,
}) {
  return (
    <div className="activity-item">

      <div className="activity-icon">
        {icon}
      </div>

      <div>

        <strong>
          {text}
        </strong>

        <small>
          {time}
        </small>

      </div>

    </div>
  );
}

// ========================================
// STUDENT TABLE
// ========================================

function StudentTable() {
  return (
    <div className="table-wrapper">

      <table>

        <thead>

          <tr>

            <th>
              Student ID
            </th>

            <th>
              Name
            </th>

            <th>
              Course
            </th>

            <th>
              Year Level
            </th>

            <th>
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>
                <strong>
                  {student.id}
                </strong>
              </td>

              <td>
                {student.name}
              </td>

              <td>
                {student.course}
              </td>

              <td>
                {student.year}
              </td>

              <td>

                <span
                  className={
                    student.status === "Active"
                      ? "status active-status"
                      : "status inactive-status"
                  }
                >
                  {student.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

// ========================================
// RENDER APP
// ========================================

createRoot(
  document.getElementById("root")
).render(
  <App />
);