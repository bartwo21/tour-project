import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { login } from "../../store/features/authSlice/authSlice";
import { useToaster, Notification } from "rsuite";
import { motion } from "framer-motion";
import { FaExclamationCircle } from "react-icons/fa";

// email ve şifre kontrolleri yap hem login de hem rezervasyonda

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toaster = useToaster();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickButton = () => {
    if (!name || !email || !password) {
      toaster.push(
        <Notification>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaExclamationCircle className="error-icon" />
            <h6>Please fill in all fields.</h6>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
      return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      toaster.push(
        <Notification type="error" header="Invalid email adress">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <h6>Please enter a valid email.</h6>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
      return;
    }

    navigate("/");
    dispatch(login({ name, email, password }));

    toaster.push(
      <Notification>
        <div className="notification-content">
          <h6>Successfully logged in 🎉</h6>
        </div>
      </Notification>,
      {
        placement: "topEnd",
      }
    );
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="container"
      >
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
      </motion.div>
    </div>
  );
};

export default Login;
