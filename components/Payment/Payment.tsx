import React from 'react'

type Props = {
    person: number;
    date: Date;
    nameSurname: string;
    email: string;
    ticket: string;
}

const Payment = ({person, date, nameSurname, email, ticket}: Props) => {
  return (
    <div>
        <h1>Payment</h1>
        <p>Person: {person}</p>
        <p>Date: {JSON.stringify(date)}</p>
        <p>Name Surname: {nameSurname}</p>
        <p>Email: {email}</p>
        <p>Ticket: {ticket}</p>
    </div>
  )
}

export default Payment