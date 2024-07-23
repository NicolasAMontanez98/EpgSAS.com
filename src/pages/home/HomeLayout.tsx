import React from 'react'
import { motion } from 'framer-motion'

export const Home: React.FC<any> = () => {
  return (
    <main className='pt-4 w-screen h-3/4 lg:h-screen flex flex-col lg:flex-row justify-center items-center items-center overflow-y-hidden pb-40 lg:pb-0'>
      <div className='w-1/2 lg:text-right text-center'>
        <h1 className='lg:text-8xl sm:text-6xl text-4xl font-title'>Bienvenidos a EPG S.A.S.</h1>
        <h3 className='font-text sm:text-2xl text-xl'>Aquí encontrarás todo para tu municipio.</h3>
      </div>
      <div className='absolute w-screen bottom-4 z-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,224C384,213,480,139,576,138.7C672,139,768,213,864,240C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className='relative w-7/12 flex justify-center items-center'>
        <motion.img
          className='absolute z-20 top-0 lg:top-auto'
          src='https://res.cloudinary.com/dkrcosw87/image/upload/v1721757382/fondo_1_qqvlwg.png'
          width={'600px'}
          height={'400px'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
      <div className='absolute w-screen bottom-0 z-30'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b10a15" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,224C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </main>
  )
}
