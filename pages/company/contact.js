import React, { useState, useMemo } from 'react'


import {db} from '../../config/firebase'
import {collection, addDoc} from "firebase/firestore"

// import style from '../../styles/Contact.module.css'

const contact = () => {
//   const [firstName,setFirstName] = useState('')
//   const [lastName,setLastName] = useState('')
//   const [email, setEmail]= useState('')

//   const [company, setCompany] = useState('')
//   const [subject,setSubject] = useState('')
//   const [message,setMessage] = useState('')

  
//   const formCollectionRef = collection(db,"ContactForm")




// const firstNameHandler = value => {
//   setFirstName(value)
// }
// const lastNameHandler = value => {
//   setLastName(value)
// }
// const emailHandler = value => {
//   setEmail(value)
// }
// const companyHandler = value => {
//   setCompany(value)
  
// }

// const subjectHandler = value => {
//   setSubject(value)
// }

// const messageHandler = value => {
//   setMessage(value)
// }
// const createMessage = async(firstName,lastName,email,country,subject, message)=>{
//   await addDoc(formCollectionRef,{
//     firstName:firstName,
//     lastName:lastName,
//     email:email,
//     country:country,
//     subject:subject,
//     message:message})
// }

// const submitMessage =()=>{
//     if(firstName===''||lastName===''||email===''|| subject===''|| message===''){
//       alert('Invalid form')
//     } else {
//       createMessage(firstName,lastName,email,country.label,subject, message)
//       alert('sent successful')
//     }
  
 

// } 


  return (
    <div className='min-h-screen w-full'>

    </div>
  )
}

export default contact

