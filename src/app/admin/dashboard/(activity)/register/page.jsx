'use client'
import { LoadingContext } from "@/Context/LoadingContextWrapper"
import axios from "axios"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import * as Yup from 'yup'
import { AiOutlineUserAdd } from "react-icons/ai";

const RegisterPage = () => {
    const router = useRouter()
    const { setLoading } = useContext(LoadingContext)
    const [error, setError] = useState(false)
    const [existingEntry, setExistingEntry] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string('Invalid Name').required('Name is Required'),
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password: Yup.string()
                .min(6, 'Must be at least 6 character')
                .required('Password is Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match') // Ensure it matches the 'password' field
                .required('Confirm Password is Required'),
        }),
        onSubmit: async (values) => {
            try {
                setError(false)
                setLoading(true)
                const response = await axios.post(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/register`, values)
                if (response.status === 201) {
                    alert('Admin Created Successfuly!!!')
                    router.replace(`${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/dashboard`)
                }
                values.name = ''
                values.email = ''
                values.password = ''
                values.confirmPassword = ''
                setLoading(false)
            } catch (error) {
                if (error.response.status === 409) {
                    setExistingEntry(true)
                }
                else {
                    setError(true)
                }
                setLoading(false)
                values.name = ''
                values.email = ''
                values.password = ''
                values.confirmPassword = ''
            }
        },
    })
    return (
        <>
            {error && <div className="md:mt-5 md:-mb-12 md:p-3 rounded-lg px-5 text-red-700 text-lg text-center tracking-wider bg-other w-1/2 m-auto">Something Went Wrong!!!</div>}
            {existingEntry && <div className="md:mt-5 md:-mb-12 md:p-3 rounded-lg px-5 text-red-700 text-lg text-center tracking-wider bg-other w-1/2 m-auto">Admin Already Exist!!!</div>}
            <div className="text-white h-full flex md:items-center p-3 overflow-auto scroll-hide scroll-btn">
                <div className="w-full">
                    <h1 className="font-quick uppercase text-center tracking-wider font-bold text-xl p-4">Register New Administrator</h1>
                    <form className="flex flex-col gap-7 p-2" onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="select-none">Name</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                placeholder="Enter Name" type="text" autoComplete="name" id="name" className="bg-transparent outline-none border rounded-lg p-2" />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-900 font-bold absolute mt-[70px]">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="select-none">Email</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="Enter Email Address" type="email" autoComplete="email" id="email" className="bg-transparent outline-none border rounded-lg p-2" />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-900 font-bold absolute mt-[70px]">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="select-none">Password</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder="Enter Your Password" type="password" id="password" className="bg-transparent outline-none border rounded-lg p-2" />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-900 font-bold absolute mt-[70px]">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="confirmPassword" className="select-none">Confirm Password</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                placeholder="Re-Enter Your Password" type="password" id="confirmPassword" className="bg-transparent outline-none border rounded-lg p-2" />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="text-red-900 font-bold absolute mt-[70px]">{formik.errors.confirmPassword}</div>
                            ) : null}
                        </div>
                        <button type="submit" className="flex justify-center items-center gap-4 shadow-lg bg-primary p-4 rounded-lg cursor-pointer w-1/2 m-auto hover:bg-slate-300 text-secondary font-semibold uppercase tracking-wider duration-700 transition-all select-none mt-3">
                            <AiOutlineUserAdd size={25} />
                            <p>Register</p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage