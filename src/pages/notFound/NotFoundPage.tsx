import './NotFoundPage.scss'
import { motion } from 'framer-motion'

const NotFoundPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{duration: .5}}
    className='not-found-page'>
      <h1>404</h1>
      <p>Sorry, we couldn't find anything.</p>
    </motion.div>
  )
}

export default NotFoundPage