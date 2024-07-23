import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { BsPeopleFill, BsYoutube } from 'react-icons/bs'
import { RiArchiveFill, RiInstagramFill } from 'react-icons/ri'
import { MdMiscellaneousServices, MdContactSupport } from 'react-icons/md'
import { SiTiktok } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { motion } from 'framer-motion'

export const Navbar: React.FC<any> = () => {
  const [ activeOption, updateActiveOption ] = useState<string>('')

  const getMotionLi = (text: string, id: string) => {
    return (
      <Link to={id}>
        <motion.li
          className='flex items-center justify-end cursor-pointer'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
        >
          {activeOption === id && <motion.span initial={{ scale: 0 }} animate={{ translateX: -15, scale: 1 }} className='text'>{text}</motion.span>}
          <motion.span
            whileHover={{ color: '#B10A15' }}
            onHoverStart={() => updateActiveOption(id)}
            onHoverEnd={() => updateActiveOption('')}
          >
            {getIcon(id)}
          </motion.span>
        </motion.li>
      </Link>
    )
  }

  const getIcon = (icon: string) => {
    const icons: any = {
      home: <AiFillHome className='pl-2' size={35} />,
      services: <MdMiscellaneousServices className='pl-2' size={35} />,
      'about-us': <BsPeopleFill className='pl-2' size={35} />,
      experiences: <RiArchiveFill className='pl-2' size={35} />,
      infographs: <MdContactSupport className='pl-2' size={35}/>
    }
    return icons[icon]
  }

  return (
    <nav className='h-full fixed right-0 p-4 pr-5 flex flex-col justify-between z-50'>
      <ul>
        {getMotionLi('Inicio', 'home')}
        {getMotionLi('Servicios', 'services')}
        {getMotionLi('Nosotros', 'about-us')}
        {getMotionLi('Experiencias', 'experiences')}
        {getMotionLi('Infografías', 'infographs')}
      </ul>
      <ul className='absolute right-4 bottom-4 p-4 gap-4 bg-black bg-opacity-70 rounded-lg'>
        <Link to={'https://wa.link/d4ys2c'} target='_blank'>
          <motion.li
            className='flex items-center justify-center cursor-pointer rounded-full mb-2'
            whileHover={{ scale: 1.2, backgroundColor: '#30C230' }}
            whileTap={{ scale: 1 }}
            style={{ width: '33px', height: '33px' }}
          ><IoLogoWhatsapp size={25} /></motion.li>
        </Link>
        <Link to={'/'} target='_blank'>
          <motion.li
            className='flex items-center justify-center cursor-pointer rounded-full'
            whileHover={{ scale: 1.2, color: '#0C0B0B', background: 'linear-gradient(90deg, rgba(8,242,236,1) 0%, rgba(8,242,236,1) 35%, rgba(228,0,65,1) 60%)' }}
            whileTap={{ scale: 1 }}
            style={{ width: '33px', height: '33px' }}
          ><SiTiktok size={25} /></motion.li>
        </Link>
        <Link to={'https://www.instagram.com/montanezloly/?igshid=NTc4MTIwNjQ2YQ%3D%3D'} target='_blank'>
          <motion.li
            className='flex items-center justify-center cursor-pointer mt-2 rounded-full'
            whileHover={{ scale: 1.2, background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' }}
            whileTap={{ scale: 1 }}
            style={{ width: '33px', height: '33px' }}
          ><RiInstagramFill size={25} /></motion.li>
        </Link>
        <Link to={'https://www.youtube.com/@loly5048'} target='_blank'>
          <motion.li
            className='flex items-center justify-center cursor-pointer mt-2 rounded-full'
            whileHover={{ scale: 1.2, backgroundColor: '#FF0000' }}
            whileTap={{ scale: 1 }}
            style={{ width: '33px', height: '33px' }}
          ><BsYoutube size={25} /></motion.li>
        </Link>
      </ul>
    </nav>
  )
}
