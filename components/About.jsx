import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240] m-auto md:grid grid-cols-3 gap-8 p-4'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Facere nihil, ex ipsum similique repellat odio accusantium 
                    architecto voluptas quae voluptatum culpa, atque, fugit commodi 
                    blanditiis animi maxime accusamus suscipit perferendis.
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Temporibus id eveniet tempore velit vero optio illo maxime 
                    doloremque tenetur a error suscipit praesentium est eos dolor 
                    veritatis, aliquam nihil officia.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img 
                    src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="/" 
                    className='rounded-xl'
                />        
            </div>
        </div>
    </div>
  )
}

export default About;
