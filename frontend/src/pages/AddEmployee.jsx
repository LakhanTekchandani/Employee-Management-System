import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AddEmployee() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page narrow">
        <section className="page-heading fade-in">
          <div>
            <p className="eyebrow">New Profile</p>
            <h1>Add Employee</h1>
            <p>Enter accurate employee details that match the backend fields.</p>
          </div>
        </section>

        <form className="employee-form fade-in delay-1">
          <div className="form-grid">
            <label className="field">
              <span>Name</span>
              <input name="name" type="text" placeholder="Employee name" required />
            </label>

            <label className="field">
              <span>Email</span>
              <input name="email" type="email" placeholder="employee@example.com" required />
            </label>

            <label className="field">
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="Phone number" required />
            </label>

            <label className="field">
              <span>Department</span>
              <input name="department" type="text" placeholder="Department" required />
            </label>

            <label className="field">
              <span>Designation</span>
              <input name="designation" type="text" placeholder="Designation" required />
            </label>

            <label className="field">
              <span>Salary</span>
              <input name="salary" type="number" placeholder="Salary" required />
            </label>

            <label className="field">
              <span>Joining Date</span>
              <input name="joiningDate" type="date" required />
            </label>
          </div>

          <div className="form-actions">
            <Link to="/employees" className="secondary-btn">
              Cancel
            </Link>
            <button className="primary-btn" type="submit">
              Add Employee
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddEmployee;