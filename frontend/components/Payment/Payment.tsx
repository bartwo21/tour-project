import { useEffect, useState } from "react";
import "./Payment.scss";
import { Button, Divider, Modal, Notification, useToaster } from "rsuite";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { useCreateTourMutation } from "../../src/store/features/tourApiSlice/tourApiSlice";
import {
  useCreatePaymentMutation,
  useGetUserPaymentsQuery,
} from "../../src/store/features/paymentApiSlice/paymentApiSlice";

type Props = {
  person: number;
  date: Date;
  nameSurname: string;
  email: string;
  ticket: string;
  onePrice: number;
  openPayment: boolean;
  setOpenPayment: (open: boolean) => void;
  location: string;
};

const Payment = ({
  person,
  date,
  nameSurname,
  email,
  ticket,
  onePrice,
  openPayment,
  setOpenPayment,
  location,
}: Props) => {
  const toaster = useToaster();
  const navigate = useNavigate();
  const [cardType, setCardType] = useState<"visa" | "mastercard" | null>(null);
  const [saveCard, setSaveCard] = useState(false);
  const [selectedSection, setSelectedSection] = useState<
    "credit" | "paypal" | null
  >("credit");
  const [paymentInfos, setPaymentInfos] = useState<{
    cardNumber: string;
    nameSurname: string;
    email: string;
    expDate: string;
    cvv: string;
    paypalNameSurname: string;
    paypalEmail: string;
  }>({
    cardNumber: "",
    nameSurname: "",
    email: "",
    expDate: "",
    cvv: "",
    paypalNameSurname: "",
    paypalEmail: "",
  });

  const [createTour, { isLoading }] = useCreateTourMutation();
  const [createPayment] = useCreatePaymentMutation();

  const { data: payments } = useGetUserPaymentsQuery();

  useEffect(() => {
    if (payments && payments.length > 0) {
      setPaymentInfos({
        cardNumber: payments[0].cardNumber,
        nameSurname: payments[0].nameSurname,
        email: payments[0].email,
        expDate: payments[0].expDate,
        cvv: payments[0].cvv,
        paypalNameSurname: payments[0].paypalNameSurname,
        paypalEmail: payments[0].paypalEmail,
      } as {
        cardNumber: string;
        nameSurname: string;
        email: string;
        expDate: string;
        cvv: string;
        paypalNameSurname: string;
        paypalEmail: string;
      });
    }
  }, [payments]);

  console.log("payments", paymentInfos);

  const checkCardType = (number: string) => {
    if (/^4/.test(number)) {
      setCardType("visa");
    } else if (/^5[1-5]/.test(number)) {
      setCardType("mastercard");
    } else {
      setCardType(null);
    }
  };
  const parsedDates = JSON.parse(JSON.stringify(date));

  const formattedDates = parsedDates.map((dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}/${month}/${day}`;
  });

  const dateRange = formattedDates.join(" - ");
  const startDate = new Date(formattedDates[0]);
  const endDate = new Date(formattedDates[1]);

  const timeDifference = endDate.getTime() - startDate.getTime();
  const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  function displayEmailErrorNotification() {
    toaster.push(
      <Notification type="error" header="Reservation Error">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <h6>Please enter a valid email.</h6>
        </div>
      </Notification>,
      {
        placement: "topEnd",
        duration: 3000,
      }
    );
  }

  const handlePaymentSubmit = async () => {
    if (
      (paymentInfos.cardNumber &&
        paymentInfos.cvv &&
        paymentInfos.email &&
        paymentInfos.expDate &&
        paymentInfos.nameSurname) ||
      (paymentInfos.paypalEmail && paymentInfos.paypalNameSurname)
    ) {
      const isValidEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (
        selectedSection === "credit" &&
        !isValidEmail.test(paymentInfos.email)
      ) {
        displayEmailErrorNotification();
        return;
      } else if (
        selectedSection === "paypal" &&
        !isValidEmail.test(paymentInfos.paypalEmail)
      ) {
        displayEmailErrorNotification();
        return;
      }
      try {
        const resTour = await createTour({
          date,
          person,
          nameSurname,
          email,
          ticket,
          location,
        }).unwrap();
        if (saveCard) {
          const resPayment = await createPayment({
            cardNumber: paymentInfos.cardNumber,
            nameSurname: paymentInfos.nameSurname,
            email: paymentInfos.email,
            expDate: paymentInfos.expDate,
            cvv: paymentInfos.cvv,
            paypalNameSurname: paymentInfos.paypalNameSurname,
            paypalEmail: paymentInfos.paypalEmail,
          }).unwrap();
          console.log("resPayment", resPayment);
        }
        console.log("resTour", resTour);
        setOpenPayment(false);
        setPaymentInfos({
          cardNumber: "",
          nameSurname: "",
          email: "",
          expDate: "",
          cvv: "",
          paypalNameSurname: "",
          paypalEmail: "",
        });
        navigate("/");
        return toaster.push(
          <Notification>
            <div className="notification-content">
              <h5>Payment Success !</h5>
              <p>Thank you for your payment 🎉</p>
            </div>
          </Notification>,
          {
            placement: "topEnd",
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      return toaster.push(
        <Notification>
          <div className="notification-content">
            <h5>Payment Error !</h5>
            <p>Please fill in the requested information ⚠️</p>
          </div>
        </Notification>,
        {
          placement: "topEnd",
          duration: 3000,
        }
      );
    }
  };

  return (
    <Modal
      overflow={false}
      open={openPayment}
      size="lg"
      onClose={() => setOpenPayment(false)}
    >
      <Modal.Header>
        <Modal.Title>Payment</Modal.Title>,
        <p>Please fill in the requested information</p>
      </Modal.Header>
      <Modal.Body>
        <div className="left-card">
          <div className="title">
            <h4>Payment Options</h4>
            <p>𖤘 Secure server</p>
          </div>
          <div className="payment-areas">
            <div className="creditCard">
              <div className="select-credit">
                <div className="left">
                  <input
                    defaultChecked
                    type="radio"
                    name="paymentOption"
                    value="credit"
                    id="paymentOption"
                    onChange={() => setSelectedSection("credit")}
                  />
                  <label htmlFor="paymentOption">Credit / Debit Card</label>
                  <p>Secure transfer using your bank account</p>
                </div>
                <div className="right">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
                    alt=""
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png"
                    alt=""
                  />
                </div>
              </div>
              {selectedSection === "credit" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inputs"
                >
                  <Divider />
                  <div className="row">
                    <div className="col">
                      <label htmlFor="cardNumber">Card Number</label>
                      <div className="credit-card-input">
                        {cardType === "visa" ? (
                          <i>
                            <FaCcVisa size={22} />
                          </i>
                        ) : cardType === "mastercard" ? (
                          <i>
                            <FaCcMastercard size={22} />
                          </i>
                        ) : null}
                        <input
                          type="text"
                          id="cardNumber"
                          value={paymentInfos.cardNumber}
                          maxLength={19}
                          onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            let position = target.selectionEnd;
                            const originalValue = target.value;
                            const regex = new RegExp(/(\d{4})/g);
                            const onlyNumbers = originalValue.replace(
                              /[^\d]/g,
                              ""
                            );
                            const formatted = onlyNumbers
                              .replace(regex, "$1 ")
                              .trim();
                            target.value = formatted;
                            if (position !== null) {
                              if (originalValue.length < target.value.length) {
                                position += 1;
                              }
                              target.selectionEnd = position;
                            }
                          }}
                          placeholder="5134 5678 9012 3456"
                          onChange={(e) => {
                            checkCardType(e.target.value);
                            setPaymentInfos({
                              ...paymentInfos,
                              cardNumber: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="cardName">Name on Card</label>
                      <input
                        type="text"
                        id="cardName"
                        value={paymentInfos.nameSurname}
                        placeholder="John Smith"
                        onChange={(e) =>
                          setPaymentInfos({
                            ...paymentInfos,
                            nameSurname: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row row-s">
                    <div className="col">
                      <label htmlFor="zipCode">Email</label>
                      <input
                        type="email"
                        id="zipCode"
                        value={paymentInfos.email}
                        placeholder="test@gmail.com"
                        onChange={(e) =>
                          setPaymentInfos({
                            ...paymentInfos,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-s">
                      <div className="box-s">
                        <label htmlFor="expDate">Expiration</label>
                        <input
                          type="text"
                          id="expDate"
                          value={paymentInfos.expDate}
                          placeholder="MM/YY"
                          maxLength={5}
                          onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            let position = target.selectionEnd;
                            const originalValue = target.value;
                            const regex = new RegExp(/(\d{2})(\d{2})/g);
                            const onlyNumbers = originalValue.replace(
                              /[^\d]/g,
                              ""
                            );
                            const formatted = onlyNumbers
                              .replace(regex, "$1/$2")
                              .trim();
                            target.value = formatted;
                            if (position !== null) {
                              if (originalValue.length < target.value.length) {
                                position += 1;
                              }
                              target.selectionEnd = position;
                            }
                          }}
                          onChange={(e) =>
                            setPaymentInfos({
                              ...paymentInfos,
                              expDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="box-s">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          value={paymentInfos.cvv}
                          placeholder="123"
                          maxLength={4}
                          onInput={(e) => {
                            const inputValue = (e.target as HTMLInputElement)
                              .value;
                            const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
                            (e.target as HTMLInputElement).value = numericValue;
                          }}
                          onChange={(e) =>
                            setPaymentInfos({
                              ...paymentInfos,
                              cvv: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="save-card-checkbox">
                    <input
                      type="checkbox"
                      id="saveCard"
                      onChange={() => setSaveCard(!saveCard)}
                      checked={saveCard}
                    />
                    <label htmlFor="saveCard">
                      Save card for future payments
                    </label>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="paypal">
              <div className="select-paypal">
                <div className="left">
                  <input
                    type="radio"
                    name="paymentOption"
                    id="paymentOption"
                    value="paypal"
                    onChange={() => setSelectedSection("paypal")}
                  />
                  <label htmlFor="paymentOption">Paypal</label>
                  <p>Secure online payment through the Paypal portal</p>
                </div>
                <div className="right">
                  <img
                    src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"
                    alt=""
                  />
                </div>
              </div>
              {selectedSection === "paypal" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="paypal-input"
                >
                  <Divider />
                  <div className="name-surname">
                    <label htmlFor="nameSurname">Name & Surname</label>
                    <input
                      type="text"
                      id="nameSurname"
                      value={paymentInfos.paypalNameSurname}
                      placeholder="John Smith"
                      onChange={(e) =>
                        setPaymentInfos({
                          ...paymentInfos,
                          paypalNameSurname: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={paymentInfos.paypalEmail}
                      placeholder="test@gmail.com"
                      onChange={(e) =>
                        setPaymentInfos({
                          ...paymentInfos,
                          paypalEmail: e.target.value,
                        })
                      }
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <div className="right-card">
          <div className="title">
            <h3>Payment Infos</h3>
          </div>
          <div>
            <div className="row">
              <div className="col">
                <h5>Name</h5>
                <p>{nameSurname}</p>
              </div>
              <div className="col col-right">
                <h5>Event Date</h5>
                <p>{dateRange}</p>
              </div>
            </div>
            <Divider />
            <div className="row">
              <div className="col">
                <h5>Event Ticket</h5>
                <p>
                  {ticket === "Himself" ? `${ticket} = 0$` : `${ticket} = 100$`}
                </p>
              </div>
              <div className="col col-right">
                <h5>Event Price</h5>
                <p>{onePrice} €</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5>Email</h5>
                <p>{email}</p>
              </div>
              <div className="col col-right">
                <h5>Day Difference</h5>
                <p>{dayDifference} days</p>
              </div>
            </div>
          </div>
          <Divider />
          <div className="row">
            <div className="col">
              <h5>Person</h5>
              <p>{person}</p>
            </div>
            <div className="col col-right">
              <h5>Total</h5>
              <p>
                ${onePrice * person * dayDifference}{" "}
                {ticket === "Our" ? "+$100" : ""}
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button
              onClick={handlePaymentSubmit}
              appearance="primary"
              color="green"
              onSubmit={handlePaymentSubmit}
              loading={isLoading}
            >
              Make Payment
            </Button>
            <Button onClick={() => setOpenPayment(false)} appearance="default">
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Payment;
