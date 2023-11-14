import { useState } from "react";
import "./Payment.scss";
import { Button, Divider, Modal } from "rsuite";
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
  return (
      <Modal overflow={false} open={openPayment} size="lg" onClose={() => setOpenPayment(false)}>
        <Modal.Header>
          <Modal.Title>Payment</Modal.Title>,
          <p>Please fill in the requested information</p>
        </Modal.Header>
        <Modal.Body>
          {/* https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F4433529-Payment-UI&psig=AOvVaw0TTEaRY2sM5iqOS8_ifBuR&ust=1699996942454000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjM_oz0wYIDFQAAAAAdAAAAABAJ */}
          {/* yukarıdaki gibi onaylanınca buton 3 saniye renk değiştirip loading dönsün sonra yeşil olup tik işareti çıksın ve 1 saniye sonra popup kapansın */}
          <div className="left-card">
            <div className="title">
              <h4>Payment Options</h4>
              <p>𖤘 Secure server</p>
            </div>
            <div className="payment-areas">
              <div className="creditCard">
                <div className="select-credit">
                  <div className="left">
                    <input type="radio" name="paymentOption" value="credit" id="paymentOption"/>
                    <label htmlFor="paymentOption">Credit / Debit Card</label>
                    <p>Secure transfer using your bank account</p>
                  </div>
                  <div className="right">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" alt="" />
                  </div>
                </div>
                <Divider />
                <div className="inputs">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="5134 5678 9012 3456"
                        onChange={(e) => checkCardType(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="cardName">Name on Card</label>
                      <input type="text" id="cardName" placeholder="John Smith" />
                    </div>
                  </div>
                  <div className="row row-s">
                      <div className="col">
                        <label htmlFor="zipCode">Email</label>
                        <input type="email" id="zipCode" placeholder="test@gmail.com" />
                      </div>
                    <div className="col-s">
                      <div className="box-s">
                        <label htmlFor="expDate">Expiration</label>
                        <input type="text" id="expDate" placeholder="MM/YY" />
                      </div>
                      <div className="box-s">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="paypal">
                <div className="select-paypal">
                  <div className="left">
                    <input type="radio" name="paymentOption" id="paymentOption" value="paypal"/>
                    <label htmlFor="paymentOption">Paypal</label>
                    <p>Secure online payment through the Paypal portal</p>
                  </div>
                  <div className="right">
                    <img src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-card">
            <div className="title">
              <h3>Payment Infos</h3>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenPayment(false)} appearance="primary" color="green">
            Make Payment
          </Button>
          <Button onClick={() => setOpenPayment(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default Payment;
