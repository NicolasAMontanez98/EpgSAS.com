import React from 'react'
import { motion } from 'framer-motion'

const te_respaldamos = (await import('../../assets/logo/te_respaldamos.png')).default

export const LogoFooter = () => {
  return (
    <div className='fixed left-0 -bottom-2 p-0 z-50'>
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
            src={te_respaldamos}
            width={'100px'}
            height={'50px'}
            alt='Te respaldamos!!!'
        />
    </div>
  )
}
