import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard({ totalEmployees = 0 }) {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page">
        <section className="page-heading fade-in">
          <div>
            <p className="eyebrow">Overview</p>
            <h1>Dashboard</h1>
            <p>Welcome back. Manage your employee records from one clean workspace.</p>
          </div>
        </section>

        <section className="stats-grid fade-in delay-1">
          <article className="stat-card">
            <div className="stat-icon">01</div>
            <div>
              <p>Total Employees</p>
              <h2>{totalEmployees}</h2>
            </div>
          </article>
        </section>

        <section className="section-block fade-in delay-2">
          <div className="section-title">
            <h2>Quick Actions</h2>
          </div>

          <div className="action-grid">
            <Link to="/add-employee" className="action-card">
              <span className="action-icon">+</span>
              <div>
                <h3>Add Employee</h3>
                <p>Create a new employee profile.</p>
              </div>
            </Link>

            <Link to="/employees" className="action-card">
              <span className="action-icon">→</span>
              <div>
                <h3>View Employees</h3>
                <p>Search and manage employee records.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="empty-state large fade-in delay-3">
          <div className="empty-illustration">
            <span />
            <span />
            <span />
          </div>
          <h2>No employees yet</h2>
          <p>Start by adding your first employee record to the system.</p>
          <Link to="/add-employee" className="primary-btn">
            Add First Employee
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;