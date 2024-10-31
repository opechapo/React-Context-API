import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext)

    if(!user) return <h4>Not Logged In</h4>


  return (
    <h1>
      Profile: {user.username}
    </h1>
  )
}

export default Profile