import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Login = () => {
    const {data} = useLoaderData()
    console.log(data.folders);
  return (
    <div>Login</div>
  )
}

export default Login