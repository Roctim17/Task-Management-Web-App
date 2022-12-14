import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import Loading from '../Components/Loading';
import { toast } from 'react-toastify';
const Login = () => {

    const [sendPasswordResetEmail, sending, forgotError] = useSendPasswordResetEmail(
        auth
    );
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();




    if (user || googleUser) {
        navigate('/')
    }



    if (googleLoading || loading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        signInError = <p className="text-red-500">{error?.message || googleError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    // Forgot Password

    const SendPasswordReset = () => {
        const email = getValues('email')
        sendPasswordResetEmail(email)

    }
    if (forgotError) {
        toast.error(forgotError.message)
    }

    else if (sending) {
        toast.success('send link')
    }


    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex ">
                        <div className="w-12 rounded-full ">
                            <img src="https://i.ibb.co/vq02Nvt/tesk-logo-removebg-preview.png" alt="tesk-logo-removebg-preview" border="0" />
                        </div>
                        <div className="text-2xl font-bold">Task Management App</div>
                    </div>
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'example@email.com'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="Password" placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}Email is pattern</span>}
                            </label>
                        </div>
                        {signInError}
                        <p className='mb-3'><small>Forgot PassWord? <Link
                            className="text-primary" to="#" onClick={SendPasswordReset} >Reset Password</Link> </small></p>
                        <input className="btn btn-accent w-full mas-w-xs text-white" type="submit" value='Login' />
                    </form>
                    <p><small>New to Task Management App <Link className="text-primary" to="/signup" >Create New Account </Link> </small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline hover:btn-accent">Continue with Google</button>
                </div>
            </div>
        </div>

    );
};

export default Login;
