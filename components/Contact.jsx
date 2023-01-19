import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Contact
          </p>
          <h2 className='py-4'>Get In Touch</h2>
          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full rounded-xl'>
                <div>
                  <img 
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80" 
                    alt="/" 
                  />
                </div>
                <div>
                  <h2 className='py-2'>Name here</h2>
                  <p>Front-End Developer</p>
                  <p>I am lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                </div>
                </div>
              </div>
            </div>
            {/* right */}
            
          </div>
        </div>
    </div>
  )
}

export default Contact;