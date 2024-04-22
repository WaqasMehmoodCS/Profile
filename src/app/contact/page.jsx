import Form from "./Form"
export const metadata = {
    title: "Contact",
    description: "Familiar Technologies, about, qualification, skills, experience, message, contact, service",
};

const ContactPage = () => {
    return (
        <div className='font-manrope h-full flex justify-center items-center text-sm'>
            <Form />
        </div>
    )
}

export default ContactPage