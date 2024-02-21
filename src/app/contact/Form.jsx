'use client'
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
const Form = () => {
    const [error, setError] = useState(false)
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
                const response = await axios.post('http://localhost:3000/api/contact', values)
                const responseData = await response.data
                console.log('Server response:', responseData);
            } catch (error) {
                console.error('Error sending form data:', error);
                setError(true)
            }
        },

    });
    return (
        <div className=" w-2/3">
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
                <button type="submit" className="ring-1 rounded-lg bg-other px-1 py-3 tracking-wider hover:tracking-widest duration-700 hover:bg-other/80">Submit</button>
            </form>


        </div>
    )
}

export default Form