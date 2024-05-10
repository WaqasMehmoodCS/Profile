import axios from "axios"


const Logout = async () => {
    try {
        const logout = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/logout`)
        // console.log(logout)
    } catch (error) {
        console.log(error)
    }
    return (
        <div>Logout</div>
    )
}

export default Logout