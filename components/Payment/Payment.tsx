import "./Payment.scss";
import { Button, Modal } from "rsuite";
type Props = {
  person: number;
  date: Date;
  nameSurname: string;
  email: string;
  ticket: string;
  onePrice: number;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Payment = ({
  person,
  date,
  nameSurname,
  email,
  ticket,
  onePrice,
  open,
  setOpen,
}: Props) => {
  return (
    <div className="payment">
      <Modal overflow={false} open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Person: {person}</p>
          <p>Date: {JSON.stringify(date)}</p>
          <p>Name Surname: {nameSurname}</p>
          <p>Email: {email}</p>
          <p>Ticket: {ticket}</p>
          <p>Price: 1 day ${onePrice}</p>
          <p>Total Price: </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)} appearance="primary" color="green">
            Make Payment
          </Button>
          <Button onClick={() => setOpen(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Payment;
