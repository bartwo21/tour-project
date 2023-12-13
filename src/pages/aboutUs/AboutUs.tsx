import './AboutUs.scss'
import { motion } from 'framer-motion'

const AboutUs = ({}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <div className='about-us'>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="about">
        <motion.h3 variants={item}>Project Description:</motion.h3>
        <motion.p variants={item}>Hello, I'm Bartu Çakır, and I'm working on projects to improve myself in frontend development. In this project, I used technologies such as React, Redux, React Router v6, TypeScript, RSuite, Framer Motion, and SCSS.</motion.p>
        <motion.h3 variants={item}>Project Features:</motion.h3>
        <motion.h5 variants={item}>User Session (Simulation):</motion.h5>
        <motion.p variants={item}>- Interface simulation for users to log in.</motion.p>
        <motion.p variants={item}>- Simulation only on the frontend side; no interaction with a real user database.</motion.p>
        <motion.h5 variants={item}>Detailed Tour Page:</motion.h5>
        <motion.p variants={item}>- A page displaying detailed tour information, including descriptions, dates, prices, and images.</motion.p>
        <motion.h5 variants={item}>Reservation and Payment Process (Simulation):</motion.h5>
        <motion.p variants={item}>- Users can select a tour, make reservations, and simulate the payment process.</motion.p>
        <motion.h5 variants={item}>Filtering:</motion.h5>
        <motion.p variants={item}>- Options to filter the tour list based on criteria such as price and city.</motion.p>
        <motion.h5 variants={item}>Search Functionality:</motion.h5>
        <motion.p variants={item}>- A search bar at the top right of the screen for searching tours.</motion.p>
        <motion.p variants={item}>- Filtering tours based on the letters entered in the input and displaying matching tours below the search bar.</motion.p>
        <motion.h5 variants={item}>Bookmarking:</motion.h5>
        <motion.p variants={item}>- Ability to bookmark tours after logging in.</motion.p>
      </motion.div>
    </div>
  )
}

export default AboutUs