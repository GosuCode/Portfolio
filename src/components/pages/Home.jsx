import React from 'react'
import mine from '../assets/mine.jpg'
import {AiFillGithub, AiFillTwitterCircle,AiFillInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'


const Home = () => {

  // const toggleAbout = () => {
  //   var element = document.getElementById("do");
  //   if (element.style.display === "none") {
  //     element.style.display = "block";
  //   } else {
  //     element.style.display = "none";
  //   }
  // }
  return (
    <div>
    <div className='justify-between p-5 bg-[#0e0e10] rounded-md md:flex md:m-10'>
      <div className='md:p-20'>
          <h1 className='text-6xl font-bold'>Alember shreesh </h1>
          <p className='pt-6 font-serif text-lg'>I am a
          <span> student </span>
          currently pursuing a Bachelor's degree in Computer Applications. <br />
         I am passionate about technology and its endless possibilities to transform the world we live in.</p>
         <div className='p-5 flex gap-4'>
          <AiFillGithub size={30} className='follow'/><FaFacebook size={30} className='follow'/><AiFillTwitterCircle size={30} className='follow'/><AiFillInstagram size={30} className='follow'/>
         </div>
      </div>
      <div className='h-auto w-auto md:w-96 pt-8'>
          <img src={mine} alt="Profile" className='profile rounded-lg'/>
      </div>
      <div>
      </div>
      </div>

      {/* <div className='wall text-center '>
        <h1 className='font-extrabold text-4xl'>About Me</h1>

        <div className='wall'>
        <h2 onClick={toggleAbout} className='cursor-pointer text-red-700 text-3xl font-semibold animate-bounce'>What do I do?</h2>
        <p id="do" className='hidden'>What can i say except you're welcome.</p>
        </div>
        <h2 className='text-blue-400 cursor-pointer animate-bounce'>?</h2>
        <p id='do' className=''></p>
        <h2 className='text-green-700 cursor-pointer animate-bounce'>What are my skills?</h2>
        <p id='do' className=''></p>
      </div> */}
          </div>
  )
}

export default Home
