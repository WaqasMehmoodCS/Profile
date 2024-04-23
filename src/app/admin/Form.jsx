'use client'
import { LoadingContext } from "@/Context/LoadingContextWrapper"
import axios from "axios"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import { MdOutlineLogin } from "react-icons/md";
import { useContext, useState } from "react"
import * as Yup from 'yup'
const Form = () => {
    const router = useRouter()
    const { setLoading } = useContext(LoadingContext)
    const [error, setError] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password: Yup.string()
                .min(6, 'Must be at least 6 character')
                .required('Password is Required')
        }),
        onSubmit: async (values) => {
            try {
                setError(false)
                setLoading(true)
                const response = await axios.post(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/admin`, values)
                const responseData = await response.data
                if (response.status === 200 && responseData.message === 'Authenticated') {
                    router.replace(`${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/dashboard`)
                }
                values.email = ''
                values.password = ''
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(true)
                values.email = ''
                values.password = ''
            }
        },
    })
    return (
        <>
            {error && <div className="px-5 text-red-700 text-lg tracking-wider">Invalid Credentials</div>}
            <form className="p-2 flex flex-col gap-10 py-5 w-2/3" onSubmit={formik.handleSubmit}>
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
                        placeholder="Enter Your Password Address" type="password" id="password" className="bg-transparent outline-none border rounded-lg p-2" />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-900 font-bold absolute mt-[70px]">{formik.errors.password}</div>
                    ) : null}
                </div>
                <button type="submit" className="flex justify-center items-center gap-4 shadow-lg bg-other p-4 rounded-lg cursor-pointer w-1/2 m-auto hover:bg-blue-500 uppercase tracking-wider duration-700 transition-all select-none mt-5">
                    <MdOutlineLogin size={25} />
                    Login
                </button>
            </form>
        </>
    )
}

export default Form