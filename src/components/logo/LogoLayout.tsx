import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const epg_logo_src = (await import('../../assets/logo/Logo EPG Sin Letras.png')).default

export const Logo: React.FC<Component> = () => {
  const navigate = useNavigate()
  return (
    <div className='absolute left-0 p-3'>
        <motion.img
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: "100%"
            }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
            src={epg_logo_src}
            width={'100px'}
            height={'100px'}
            alt='EPG S.A.S.'
            onClick={() => navigate('/')}
        />
    </div>
  )
}
