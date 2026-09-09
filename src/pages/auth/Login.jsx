import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    // Temporary frontend-only login.
    // Backend authentication will replace this later.
    setTimeout(() => {
      const role = "SCHOOL_ADMIN";

      login(role);

      const from = location.state?.from?.pathname || "/school-admin/dashboard";

      navigate(from, { replace: true });

      setLoading(false);
    }, 400);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* BRAND */}

        <div className="login-brand">
          <div className="brand-logo">V</div>

          <div>
            <div className="brand-name">Vetri+</div>

            <div className="brand-subtitle">School ERP</div>
          </div>
        </div>

        {/* HEADING */}

        <div className="login-heading">
          <h1>Welcome back</h1>

          <p>Sign in to manage your school.</p>
        </div>

        {/* FORM */}

        <form className="login-form" onSubmit={handleSubmit}>
          {/* EMAIL */}

          <div className="form-group">
            <label htmlFor="email">Email address</label>

            <div className="input-wrapper">
              <Mail size={16} />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@school.com"
                autoComplete="email"
              />
            </div>
          </div>

          {/* PASSWORD */}

          <div className="form-group">
            <div className="password-label-row">
              <label htmlFor="password">Password</label>

              <button type="button" className="forgot-password">
                Forgot password?
              </button>
            </div>

            <div className="input-wrapper">
              <LockKeyhole size={16} />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* ERROR */}

          {error && <div className="login-error">{error}</div>}

          {/* SUBMIT */}

          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* DEMO NOTE */}

        <div className="login-demo">Frontend demo · School Admin access</div>
      </div>
    </div>
  );
}
