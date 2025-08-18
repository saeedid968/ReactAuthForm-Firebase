import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../config/firebase'
import { toast } from 'react-toastify'

const Signup = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const signupForm = (event) => {
    event.preventDefault()
    console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      console.log(user);
      toast.success("Signed in successfully");


    }).catch((error) => {
      console.log(error);
      toast.error("User already exists")

    })
  }

  // Google signup
  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Signed in with Google");
        navigate("/dashboard")
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google Sign-in failed");
      })
  }



  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWQvd7Jl4kGDDuesvfypOsTmGK1SZ8dluMsFrZ8L7iuR5D8dlQDmckulcoEc79itminQ&usqp=CAU")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <form onSubmit={signupForm}>
        <Paper
          elevation={3}
          className="p-8 w-96 rounded-2xl shadow-md border border-gray-200 bg-white"
        >
          <Typography
            variant="h4"
            className="text-center font-bold text-gray-800 mb-6"
          >
            Sign Up
          </Typography>
          <br />
          <br />
          <div className="flex flex-col gap-5">
            <TextField
              fullWidth
              required
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              fullWidth
              required
              label="Email Address"
              type="email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              required
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="!bg-gray-900 hover:!bg-gray-800 !py-2 !rounded-lg normal-case"
            >
              Create Account
            </Button>
          </div>

          <br />

                    <div className="flex flex-col gap-3 mt-6">
            <Button onClick={signupWithGoogle} fullWidth variant="outlined" className="!py-2 !rounded-lg">
              Sign up with Google
            </Button>

          </div>

<br />

          <Typography
            variant="body2"
            className="text-center text-gray-600 mt-6"
          >
            Already have an account?{" "}
            <span onClick={() => navigate('/')} className="text-gray-900 font-medium cursor-pointer hover:underline">
              Login
            </span>
          </Typography>
        </Paper>
      </form>
    </div>


  )
}

export default Signup