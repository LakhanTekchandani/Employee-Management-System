import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function EditEmployee({ employee = {}, onDelete }) {
  const { id } = useParams();

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page narrow">
        <section className="page-heading fade-in">
          <div>
            <p className="eyebrow">Update Profile</p>
            <h1>Edit Employee</h1>
            <p>Review and update employee information with care.</p>
          </div>
        </section>

        <form className="employee-form fade-in delay-1">
          <div className="form-grid">
            <label className="field">
              <span>Name</span>
              <input name="name" type="text" defaultValue={employee.name || ""} required />
            </label>

            <label className="field">
              <span>Email</span>
              <input name="email" type="email" defaultValue={employee.email || ""} required />
            </label>

            <label className="field">
              <span>Phone</span>
              <input name="phone" type="tel" defaultValue={employee.phone || ""} required />
            </label>

            <label className="field">
              <span>Department</span>
              <input name="department" type="text" defaultValue={employee.department || ""} required />
            </label>

            <label className="field">
              <span>Designation</span>
              <input name="designation" type="text" defaultValue={employee.designation || ""} required />
            </label>

            <label className="field">
              <span>Salary</span>
              <input name="salary" type="number" defaultValue={employee.salary || ""} required />
            </label>

            <label className="field">
              <span>Joining Date</span>
              <input name="joiningDate" type="date" defaultValue={employee.joiningDate || ""} required />
            </label>
          </div>

          <div className="form-actions">
            <Link to="/employees" className="secondary-btn">
              Cancel
            </Link>
            <button className="primary-btn" type="submit">
              Save Changes
            </button>
          </div>
        </form>

        <section className="danger-zone fade-in delay-2">
          <div>
            <h2>Danger Zone</h2>
            <p>Deleting this employee removes the record from the directory.</p>
          </div>
          <button className="danger-btn" type="button" onClick={() => onDelete && onDelete(id)}>
            Delete Employee
          </button>
        </section>
      </main>
    </div>
  );
}

export default EditEmployee;