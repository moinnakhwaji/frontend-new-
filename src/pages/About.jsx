import React from 'react'
import { Navbar } from '../components'
import styles from '../style'
import Loader from '../components/Loader'

const About = () => {
  return (
    <>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Loader/>
      </div>
    </div>
    <div className='bg-[#00040f] min-h-screen'>
        about
    </div>
    </>
  )
}

export default About