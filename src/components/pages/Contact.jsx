import React from 'react'

const Contact = () => {
  return (
    <div className='text-center'>
        <h1 className='text-4xl mt-7'>Contact Me</h1>
        <p className='mt-8'>I'm very happy you decided to contact me. Please fill the form bellow with your message. </p>
        <div className='flex justify-between mb-32 ml-32 mr-32 mt-20 text-black'>
          <div className='w-[52%]'>
          <input type="text" placeholder='Your Name:' className='p-2 mt-3 w-full rounded-md'/> <br />
          <input type="text" placeholder='Your Email:' className='p-2 mt-7 w-full rounded-md'/> <br />
          <input type="text" placeholder='Your Subject' className='p-2 mt-7 w-full rounded-md'/> <br />
          <button className='bg-fuchsia-800 rounded-lg m-7 p-2 w-52'>Send Message</button>
          </div>
          <div className='w-[45%] text-black'>
            <textarea name="" id="" cols="70" rows="7" placeholder='Your Message:' className='m-3 rounded-md'></textarea>
          </div>
        </div>
    </div>
  )
}

export default Contact
