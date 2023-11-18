import { useState } from "react";
import "./Payment.scss";
import { Button, Divider, Modal, Notification, useToaster } from "rsuite";
import React from "react";
type Props = {
  person: number;
  date: Date;
  nameSurname: string;
  email: string;
  ticket: string;
  onePrice: number;
  openPayment: boolean;
  setOpenPayment: (open: boolean) => void;
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
}: Props) => {
  const [cardType, setCardType] = useState<'visa' | 'mastercard' | null>(null);
  const [selectedSection, setSelectedSection] = useState<'credit' | 'paypal' | null>('credit');
  const [paymentSubmitted, setPaymentSubmitted] = useState<boolean>(false);
  const [paymentInfos, setPaymentInfos] = useState<{
    cardNumber: string;
    nameSurname: string;
    email: string;
    expDate: string;
    cvv: string;
    paypalNameSurname?: string;
    paypalEmail?: string;
  }>({
    cardNumber: '',
    nameSurname: '',
    email: '',
    expDate: '',
    cvv: '',
    paypalNameSurname: '',
    paypalEmail: '',
  })

  const checkCardType = (number: string) => {
    if (/^4/.test(number)) {
      setCardType('visa');
    }
    else if (/^5[1-5]/.test(number)) {
      setCardType('mastercard');
    }
    else {
      setCardType(null);
    }
    console.log(cardType)
  };
  const parsedDates = JSON.parse(JSON.stringify(date));
  
  const formattedDates = parsedDates.map((dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  });

  const dateRange = formattedDates.join(" - ");
  const startDate = new Date(formattedDates[0]);
  const endDate = new Date(formattedDates[1]);
  const toaster = useToaster();

  const timeDifference = endDate.getTime() - startDate.getTime();
  const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const handlePaymentSubmit = () => {
    if (paymentInfos.cardNumber && paymentInfos.cvv && paymentInfos.email && paymentInfos.expDate && paymentInfos.nameSurname || paymentInfos.paypalEmail && paymentInfos.paypalNameSurname) {
      setPaymentSubmitted(true);
      setTimeout(() => {
        setPaymentSubmitted(false);
        setOpenPayment(false);
        setPaymentInfos({
          cardNumber: '',
          nameSurname: '',
          email: '',
          expDate: '',
          cvv: '',
          paypalNameSurname: '',
          paypalEmail: '',
        })
        return toaster.push(<Notification>
          <div className="notification-content">
            <h5>Payment Success !</h5>
            <p>Thank you for your payment 🎉</p>
          </div>
        </Notification> ,{
          placement: 'topEnd',
        }
      )}, 2000);
    } else {
      return toaster.push(<Notification>
        <div className="notification-content">
          <h5>Payment Error !</h5>
          <p>Please fill in the requested information ⚠️</p>
        </div>
      </Notification>, {
        placement: 'topEnd',
        duration: 3000,
      });
    }
  }

  return (
      <Modal overflow={false} open={openPayment} size="lg" onClose={() => setOpenPayment(false)}>
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
                    <input defaultChecked type="radio" name="paymentOption" value="credit" id="paymentOption"
                      onChange={() => setSelectedSection('credit')}
                    />
                    <label htmlFor="paymentOption">Credit / Debit Card</label>
                    <p>Secure transfer using your bank account</p>
                  </div>
                  <div className="right">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" alt="" />
                  </div>
                </div>
                {selectedSection === 'credit' && (
                  <div className="inputs">
                    <Divider />
                    <div className="row">
                      <div className="col">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          placeholder="5134 5678 9012 3456"
                          onChange={
                            (e) => {checkCardType(e.target.value)
                              setPaymentInfos({
                                ...paymentInfos,
                                cardNumber: e.target.value
                              })
                            }
                          }
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="cardName">Name on Card</label>
                        <input type="text" id="cardName" placeholder="John Smith"
                          onChange={
                            (e) => setPaymentInfos({
                              ...paymentInfos,
                              nameSurname: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row row-s">
                        <div className="col">
                          <label htmlFor="zipCode">Email</label>
                          <input type="email" id="zipCode" placeholder="test@gmail.com" 
                            onChange={
                              (e) => setPaymentInfos({
                                ...paymentInfos,
                                email: e.target.value
                              })
                            }
                          />
                        </div>
                      <div className="col-s">
                        <div className="box-s">
                          <label htmlFor="expDate">Expiration</label>
                          <input type="text" id="expDate" placeholder="MM/YY" 
                            onChange={
                              (e) => setPaymentInfos({
                                ...paymentInfos,
                                expDate: e.target.value
                              })
                            }
                          />
                        </div>
                        <div className="box-s">
                          <label htmlFor="cvv">CVV</label>
                          <input type="text" id="cvv" placeholder="123" 
                            onChange={
                              (e) => setPaymentInfos({
                                ...paymentInfos,
                                cvv: e.target.value
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="paypal">
                <div className="select-paypal">
                  <div className="left">
                    <input type="radio" name="paymentOption" id="paymentOption" value="paypal"
                      onChange={() => setSelectedSection('paypal')}
                    />
                    <label htmlFor="paymentOption">Paypal</label>
                    <p>Secure online payment through the Paypal portal</p>
                  </div>
                  <div className="right">
                    <img src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png" alt="" />
                  </div>
                </div>
                {selectedSection === 'paypal' && (
                  <div className="paypal-input">
                    <Divider />
                    <div className="name-surname">
                      <label htmlFor="nameSurname">Name & Surname</label>
                      <input type="text" id="nameSurname" placeholder="John Smith" 
                        onChange={
                          (e) => setPaymentInfos({
                            ...paymentInfos,
                            paypalNameSurname: e.target.value
                          })
                        }
                      />
                    </div>
                    <div className="input">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="test@gmail.com" 
                        onChange={
                          (e) => setPaymentInfos({
                            ...paymentInfos,
                            paypalEmail: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>
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
                  <p>{
                    ticket === "Himself" ? `${ticket} = 0$` : `${ticket} = 100$`
                  }</p>
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
                  <p>${onePrice * person * dayDifference} {ticket === "Our" ? "+$100" : ""}</p>
                </div>
              </div>
            <div className="buttons">
              <Button onClick={handlePaymentSubmit}
              appearance="primary" 
              color="green"
              onSubmit={handlePaymentSubmit}
              loading={paymentSubmitted}
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
