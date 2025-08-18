import { Button, Paper, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { toast } from 'react-toastify'

const Login = () => {




    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const getData = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            console.log(user);
            toast.success("Login successfully");
            navigate("/dashboard")

        }).catch((error) => {
            console.log(error);
            toast.error("Please Try again!")
        })

    }



    return (
        <div className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url("https://st4.depositphotos.com/3930503/19991/i/450/depositphotos_199910082-stock-photo-light-blue-gradient-background-blue.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <form onSubmit={getData}>
                <Paper
                    elevation={3}
                    className="p-8 w-96 rounded-2xl shadow-md border border-gray-200 bg-red-500"
                >
                    <Typography
                        variant="h4"
                        className="text-center font-bold text-gray-800 mb-6"
                    >
                        Login
                    </Typography>
                    <br />
                    <br />
                    <div className="flex flex-col gap-5">


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
                            Login
                        </Button>
                    </div>

                    <br />

                    <Typography
                        variant="body2"
                        className="text-center text-gray-600 mt-6"
                    >
                        Already have an account?{" "}
                        <span onClick={() => navigate('/signup')} className="text-gray-900 font-medium cursor-pointer hover:underline">
                            Sign Up
                        </span>
                    </Typography>
                </Paper>
            </form>
        </div>)
}

export default Login