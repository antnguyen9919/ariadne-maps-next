import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from '../../styles/Solutions.module.css'
import {variant1} from '../../sections/animations'

// import nagivate from  "../../public/Photos/Pages/Navigation/navigate.png"
// import munichoffice from  "../../public/Photos/Pages/Navigation/MunichOffice.png"
// import phone3 from  "../../public/Photos/Pages/Navigation/phone3.png"

const herovariants = {
  hidden:{opacity: 0, x:0, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:0}

}
const heroVvariants = {
  hidden:{opacity: 0, x:0, y:200},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:200}

}


const ariadneNavigation = () => {
  return <div>as </div>
  
}

export default ariadneNavigation
