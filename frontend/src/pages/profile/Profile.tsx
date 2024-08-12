import "./Profile.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notification, toaster } from "rsuite";
import { useUpdateUserMutation } from "../../store/features/usersApiSlice/usersApiSlice";
import { login as setCredentials } from "../../store/features/authSlice/authSlice";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector((state: any) => state.user);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user.setName, user.setEmail]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toaster.push(
        <Notification>
          <div className="notification-content">
            <h4>Passwords do not match.</h4>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
    } else {
      try {
        const res = await updateProfile({
          _id: user._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        setPassword("");
        setConfirmPassword("");
        toaster.push(
          <Notification>
            <div className="notification-content">
              <h6>Profile Updated Successfully.</h6>
            </div>
          </Notification>,
          {
            placement: "topEnd",
          }
        );
      } catch (error: any) {
        toaster.push(
          <Notification>
            <div className="notification-content">
              <h4>
                {error.data.message ||
                  "Something went wrong. Please try again."}
              </h4>
            </div>
          </Notification>,
          {
            placement: "topEnd",
          }
        );
      }
    }
  };

  return (
    <div className="profile-page">
      <div className="container">
        <h1>Profile</h1>
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
        {/* <div className="favorite-cards"></div> */}
        <button onClick={submitHandler} disabled={isLoading} className="button">
          {isLoading ? "Loading..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
