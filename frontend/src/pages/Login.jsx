import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">
          <span>EMS</span>
        </div>
        <div className="login-copy">
          <p className="eyebrow">Employee Management System</p>
          <h1>Welcome Back</h1>
          <p>Sign in to manage employees, departments, and records.</p>
        </div>

        <form className="login-form">
          <label className="field">
            <span>Email</span>
            <input type="email" placeholder="admin@example.com" />
          </label>

          <label className="field">
            <span>Password</span>
            <input type="password" placeholder="Enter your password" />
          </label>

          <Link to="/dashboard" className="primary-btn login-submit">
            Login
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Login;