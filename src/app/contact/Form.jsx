'use client'

import { LoadingContext } from "@/Context/LoadingContextWrapper";
import axios from "axios";
import dotenv from "dotenv";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import * as Yup from 'yup'

dotenv.config()

const Form = () => {
    const { loading, setLoading } = useContext(LoadingContext)
    const [error, setError] = useState(false)
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        if (alert === true) {
            setTimeout(() => {
                setAlert(false)
            }, 4000);
        }
    }, [alert])
    const formik = useFormik({
        initialValues: {
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            message: Yup.string()
                .max(1000, 'Must be 1000 characters or less')
                .required('Message is Required')
        }),

        onSubmit: async (values) => {

            try {
                setLoading(true)
                const response = await axios.post(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/contact`, values)
                console.log(response)
                const responseData = await response.data
                // console.log('Message is sent Successfuly:', responseData);
                values.email = ''
                values.message = ''
                setLoading(false)
                setAlert(true)
            } catch (error) {

                // console.error('Error sending form data:', error);
                setLoading(false)
                setError(true)
                values.email = ''
                values.message = ''
            }
        },
    });
    return (
        <>
            {alert &&
                <div className="mb-5 border-t-4 border-secondary rounded-b text-teal-900 px-4 py-3 shadow-md w-full absolute left-0 top-0 z-[100] bg-other " role="alert">
                    <div className="flex justify-center items-center">
                        <div className="py-1"><svg className="fill-white h-6 w-6 text-primary mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                        <div>
                            <p className="font-bold">Thanks for your interest</p>
                            <p className="text-sm">Your Response has been added.</p>
                        </div>
                    </div>
                </div>
            }
            <div className='w-2/3'>
                <form onSubmit={formik.handleSubmit} className="border border-white bg-slate-500/70 rounded-lg text-primary w-full p-4 animate-scale-up-center flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg text-other tracking-widest font-bold" htmlFor="email">Email<span className="text-red-600">*</span></label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="rounded-lg p-2 text-secondary outline-none"
                            autoComplete='email'
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-900 font-bold absolute mt-[75px]">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg text-other tracking-widest font-bold" htmlFor="message">Message<span className="text-red-600">*</span></label>
                        <textarea
                            id="message"
                            rows={10}
                            name="message"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className="rounded-lg p-2 text-secondary outline-none"
                        />
                        <div className="flex justify-between px-1">
                            <div>
                                {error && <div className="text-red-900 w-1/2 md:w-full font-bold">Something Went wrong!!</div>}
                            </div>
                            <div>{formik.values.message.length}/1000</div>
                        </div>
                        {formik.touched.message && formik.errors.message ? (
                            <div className="text-red-900 w-1/2 md:w-full font-bold absolute mt-64">{formik.errors.message}</div>
                        ) : null}
                    </div>
                    <button type="submit" className={`ring-1 rounded-lg bg-other px-1 py-3 tracking-wider hover:tracking-widest duration-700 hover:bg-other/80 ${loading && 'cursor-not-allowed'}`}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form