import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from '../store/store'
import { getUserState, setEmail, setName } from '../store/slices/userSlice'

const About: React.FC = () => {

   const dispatch = useDispatch()
   const { name, email } = useSelector(getUserState)

   const onClick = () => {
      setTimeout(() => {
         dispatch(setName('John Doe'))
         dispatch(setEmail('johndoe@gmail.com'))
      }, 2000)
   }

   useEffect(() => {
      localStorage.setItem('userState', JSON.stringify({ name, email }))
   }, [name, email])
   
   return (
      <>
         <h1>Hi {name}</h1>
         <button onClick={onClick}>Change it!</button><br />
         <Link to="/">Home</Link>
      </>
   )
}

export default About
