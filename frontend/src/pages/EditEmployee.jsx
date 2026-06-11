import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function EditEmployee({ employee = {}, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await axios.patch(
      `http://localhost:5000/employees/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Employee Updated Successfully");
    navigate("/employees");

  } catch (error) {
    console.log(error);
    alert("Failed to Update Employee");
  }
};
const handleDelete = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/employees/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Employee Deleted Successfully");
    navigate("/employees");

  } catch (error) {
    console.log(error);
    alert("Failed to Delete Employee");
  }
};

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  department: "",
  designation: "",
  salary: "",
  joiningDate: "",
});
const fetchEmployee = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `http://localhost:5000/employees/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setFormData(response.data.employee);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchEmployee();
}, []);

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

        <form className="employee-form fade-in delay-1" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="field">
              <span>Name</span>
              <input name="name" type="text" value={formData.name}onChange={handleChange} required />
            </label>

            <label className="field">
              <span>Email</span>
              <input name="email" type="email" value={formData.email}
  onChange={handleChange} required />
            </label>

            <label className="field">
              <span>Phone</span>
              <input name="phone" type="tel" value={formData.phone}
  onChange={handleChange} required />
            </label>

            <label className="field">
              <span>Department</span>
              <input name="department" type="text" value={formData.department}
  onChange={handleChange} required />
            </label>

            <label className="field">
              <span>Designation</span>
              <input name="designation" type="text" value={formData.designation}
  onChange={handleChange} required />
            </label>

            <label className="field">
              <span>Salary</span>
              <input name="salary" type="number" value={formData.salary}
  onChange={handleChange} required />
            </label>

            <label className="field">
              <span>Joining Date</span>
              <input name="joiningDate" type="date" value={formData.joiningDate}
  onChange={handleChange} required />
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
          <button className="danger-btn" type="button"  onClick={handleDelete}>
            Delete Employee
          </button>
        </section>
      </main>
    </div>
  );
}

export default EditEmployee;