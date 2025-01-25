import React from 'react'
import { Navbar } from '../components'
import styles from '../style'

const About = () => {
  return (
    <>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className='bg-[#00040f] min-h-screen'>
        abou
    </div>
    </>
  )
}

export default About