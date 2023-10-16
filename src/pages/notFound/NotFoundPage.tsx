import React from 'react'
import './NotFoundPage.scss'
type Props = {}

const NotFoundPage = (props: Props) => {
  return (
    <div className='not-found-page'>
      <h1>404</h1>
      <p>Sorry, we couldn't find anything.</p>
    </div>
  )
}

export default NotFoundPage