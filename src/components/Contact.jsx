import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "49ec3829-eb03-494e-8322-f1506fd7ffb1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            alert('Form submitted successfully.')
            setResult("");
            event.target.reset();
        } else {
            setResult("");
            alert(data.message);
            console.log('Error', data);
        }
    };



    return (
        <div className='scroll-mt-25 flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2' >Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With us</span></h1>
            <p className='text-gray-500 max-w-90 text-center mb-8'>Ready to make a move? Let's Build Your Future Together</p>


            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8 flex flex-col justify-center items-center'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' placeholder='Your Name' name='Name' required />
                    </div>


                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='email' placeholder='Your Email' name='Email' required />
                    </div>
                </div>

                <div className='my-6 text-left w-full'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder='Message' required></textarea>
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : 'Send Message'}</button>

            </form>
        </div>
    )
}

export default Contact