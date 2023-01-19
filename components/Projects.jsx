import React from 'react';
import Projectitems from '../components/Projectitems'
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240] mx-auto px-2 y-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <Projectitems 
                    title='Property Finder' 
                    backgroundImg={propertyImg} 
                    propertyUrl='/property' 
                />
                <Projectitems 
                    title='Crypto App' 
                    backgroundImg={cryptoImg} 
                    propertyUrl='/property' 
                />
                <Projectitems 
                    title='Netflix' 
                    backgroundImg={netflixImg} 
                    propertyUrl='/property' 
                />
                <Projectitems 
                    title='Twitch' 
                    backgroundImg={twitchImg} 
                    propertyUrl='/property' 
                />
            </div>
        </div>
    </div>
  )
}

export default Projects;