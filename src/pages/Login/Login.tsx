import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../store/features/authSlice/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickButton = () => {
    if (name && email && password) {
      const isValidEmail = /\S+@\S+\.\S+/.test(email);
      if (!isValidEmail) {
        return;
      }
      navigate("/");
      dispatch(login({ name, email, password }));
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Login</h1>
        <div className="input-space">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-space">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-space">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleShowPassword} className="show-password">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button onClick={handleClickButton} className="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
