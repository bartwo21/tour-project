import "./Profile.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notification, toaster } from "rsuite";
import { useUpdateUserMutation } from "../../store/features/usersApiSlice/usersApiSlice";
import { login as setCredentials } from "../../store/features/authSlice/authSlice";
import {
  useGetUserPaymentsQuery,
  useDeletePaymentMutation,
} from "../../store/features/paymentApiSlice/paymentApiSlice";
import {
  useGetUserToursQuery,
  useDeleteTourMutation,
} from "../../store/features/tourApiSlice/tourApiSlice";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  const {
    data: payments,
    refetch: refetchPayments,
    isLoading: paymentsLoading,
  } = useGetUserPaymentsQuery(user?._id);
  const [deletePayment] = useDeletePaymentMutation();
  const {
    data: tours,
    refetch: refetchTours,
    isLoading: toursLoading,
  } = useGetUserToursQuery(user?._id);
  const [deleteTour] = useDeleteTourMutation();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function formatDateRange(startDateStr: any, endDateStr: any) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const formatDate = (date: any) =>
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(date.getDate()).padStart(2, "0")}`;

    return `${formatDate(startDate)} to ${formatDate(endDate)}`;
  }

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

  const handleDeletePayment = async (paymentId: any) => {
    try {
      await deletePayment(paymentId).unwrap();
      refetchPayments();
      toaster.push(
        <Notification>
          <div className="notification-content">
            <h6>Payment Deleted Successfully.</h6>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
    } catch (error: any) {
      console.log(error);
      toaster.push(
        <Notification>
          <div className="notification-content">
            <h4>{error.data.message || "Failed to delete payment."}</h4>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
    }
  };

  const handleDeleteTour = async (tourId: any) => {
    try {
      await deleteTour(tourId).unwrap();
      refetchTours();
      toaster.push(
        <Notification>
          <div className="notification-content">
            <h6>Tour Deleted Successfully.</h6>
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
            <h4>{error.data.message || "Failed to delete tour."}</h4>
          </div>
        </Notification>,
        {
          placement: "topEnd",
        }
      );
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
        <button onClick={submitHandler} disabled={isLoading} className="button">
          {isLoading ? "Loading..." : "Update Profile"}
        </button>
        <div className="payments-section">
          <h2>Saved Payments</h2>
          <ul>
            {paymentsLoading ? (
              <div className="spinner"></div>
            ) : payments && payments.length > 0 ? (
              payments?.map((payment: any) => (
                <li key={payment._id}>
                  <span>
                    <strong>Name:</strong> {payment.nameSurname}
                  </span>
                  <span>
                    <strong>Card No:</strong> {payment.cardNumber}
                  </span>
                  <span>
                    <strong>Paypal:</strong> {payment.paypalEmail}
                  </span>
                  <button onClick={() => handleDeletePayment(payment._id)}>
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p>No payments saved yet.</p>
            )}
          </ul>
        </div>
        <div className="tours-section">
          <h2>Booked Tours</h2>
          {toursLoading ? (
            <div className="spinner"></div>
          ) : tours && tours.length > 0 ? (
            <ul>
              {tours?.map((tour: any) => (
                <li key={tour._id}>
                  <span>
                    <strong>Date:</strong>{" "}
                    {formatDateRange(tour.date[0], tour.date[1])}
                  </span>
                  <span>
                    <strong>Person:</strong> {tour.person}
                  </span>
                  <span>
                    <strong>Location: </strong> {tour.location}
                  </span>
                  <button onClick={() => handleDeleteTour(tour._id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tours booked yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
