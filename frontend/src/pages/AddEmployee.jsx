import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function AddEmployee() {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  department: "",
  designation: "",
  salary: "",
  joiningDate: "",
});
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

    await axios.post(
      "http://localhost:5000/employees",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Employee Added Successfully");

    navigate("/employees");

  } catch (error) {
    console.log(error);
    alert("Failed to Add Employee");
  }
};
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

        <form className="employee-form fade-in delay-1 "  onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="field">
              <span>Name</span>
              <input name="name" type="text" placeholder="Employee name" required  value={formData.name}
  onChange={handleChange} />
            </label>

            <label className="field">
              <span>Email</span>
              <input name="email" type="email" placeholder="employee@example.com" required  value={formData.email}
  onChange={handleChange} />
            </label>

            <label className="field">
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="Phone number" required   value={formData.phone}
  onChange={handleChange}/>
            </label>

            <label className="field">
              <span>Department</span>
              <input name="department" type="text" placeholder="Department" required   value={formData.department}
  onChange={handleChange}/>
            </label>

            <label className="field">
              <span>Designation</span>
              <input name="designation" type="text" placeholder="Designation" required   value={formData.designation}
  onChange={handleChange}/>
            </label>

            <label className="field">
              <span>Salary</span>
              <input name="salary" type="number" placeholder="Salary" required  value={formData.salary}
  onChange={handleChange} />
            </label>

            <label className="field">
              <span>Joining Date</span>
              <input name="joiningDate" type="date" required   value={formData.joiningDate}
  onChange={handleChange}/>
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