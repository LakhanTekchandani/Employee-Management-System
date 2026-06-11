import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function EmployeeList() {

  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([]);

  const filteredEmployees = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return employees;
    }

    return employees.filter((employee) =>
      [
        employee.name,
        employee.email,
        employee.phone,
        employee.department,
        employee.designation,
        employee.salary,
        employee.joiningDate,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [employees, searchTerm]);

  const fetchEmployees = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:5000/employees",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setEmployees(response.data.employees);

  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchEmployees();
}, []);

const handleDelete = async (id) => {
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

    fetchEmployees();

  } catch (error) {
    console.log(error);
    alert("Failed to Delete Employee");
  }
};

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page">
        <section className="page-heading split fade-in">
          <div>
            <p className="eyebrow">Directory</p>
            <h1>Employees</h1>
            <p>Search, review, and maintain employee records.</p> 
          </div>
          <Link to="/add-employee" className="primary-btn">
            Add Employee
          </Link>
        </section>

        <section className="search-panel fade-in delay-1">
          <input
            type="search"
            placeholder="Search employees by name, email, department, or role"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </section>

        <section className="table-card fade-in delay-2">
          {filteredEmployees.length > 0 ? (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Joining Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee._id || employee.id || employee.email}>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.department}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.salary}</td>
                      <td>{employee.joiningDate}</td>
                      <td>
                        <div className="table-actions">
                          <Link to={`/edit-employee/${employee._id || employee.id}`} className="ghost-btn">
                            Edit
                          </Link>
                          <button
                            className="danger-btn small"
                            type="button"
                            onClick={() => handleDelete(employee._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
             ) : (
            <div className="empty-state table-empty">
              <div className="empty-illustration compact">
                <span />
                <span />
                <span />
              </div>
              <h2>No employees found</h2>
              <p>Add employees to start building your directory.</p>
              <Link to="/add-employee" className="primary-btn">
                Add Employee
              </Link>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default EmployeeList;