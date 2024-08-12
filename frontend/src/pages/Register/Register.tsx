import "./Register.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../store/features/usersApiSlice/usersApiSlice";
import { login as setCredantials } from "../../store/features/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
import { Notification, toaster } from "rsuite";
import { FaExclamationCircle } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();
  const { user } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickButton = async () => {
    if (!email || !password || !confirmPassword || !name) {
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

    if (password !== confirmPassword) {
      toaster.push(
        <Notification>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaExclamationCircle className="error-icon" />
            <h6>Passwords do not match.</h6>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
      return;
    }

    try {
      const res = await register({ name, email, password }).unwrap();
      console.log(res);
      dispatch(setCredantials({ ...res }));
      navigate("/");
      toaster.push(
        <Notification>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <h6>Successfully registered. Welcome {res.name}! 🎉</h6>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
    } catch (error: any) {
      toaster.push(
        <Notification>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaExclamationCircle className="error-icon" />
            <h6>{error.data.message}</h6>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
        <h1>Register</h1>
        <div className="input-space">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-space">
          <input
            type="email"
            placeholder="Email"
            value={email}
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
        <div className="input-space">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          disabled={isLoading}
          onClick={handleClickButton}
          className="button"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
      </motion.div>
    </div>
  );
};

export default Register;
