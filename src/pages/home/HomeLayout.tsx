import React, { Component } from 'react'
import { motion } from 'framer-motion'

const team_response = await import('../../assets/team-epg-transparent.png')
const team = team_response.default

export const Home: React.FC<Component> = () => {
  return (
    <main className='pt-4 w-screen h-screen flex justify-center items-center overflow-y-hidden'>
      <div className='w-4/12 text-right'>
        <h1 className='text-6xl font-title'>Bienvenidos a EPG S.A.S.</h1>
        <h3 className='font-text text-2xl'>Aquí encontrarás todo para tu municipio.</h3>
      </div>
      <div className='absolute w-screen bottom-4 z-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,224C384,213,480,139,576,138.7C672,139,768,213,864,240C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className='relative w-7/12 flex justify-center items-center'>
        <svg width="920" height="980" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"><path d="M1592.2788223431605,540.9999999999999C1610.003402143626,705.8605398399885,1386.3928556373273,894.1957458770839,1218.7627457812105,970.6689024136431C1051.1326359250936,1047.1420589502022,725.5857451335302,1134.4971904374836,586.4981632064599,999.8389392193549C447.4105812793897,865.1806880012261,296.58440359012985,332.44160774581155,384.2372542187893,162.719395104871C471.89010484744875,-7.002817536069557,911.0750056243547,-81.54110410880998,1112.4152669784166,-18.494336626288487C1313.7555283324784,44.552430856232995,1574.554242542695,376.13946016001125,1592.2788223431605,540.9999999999999C1610.003402143626,705.8605398399885,1386.3928556373273,894.1957458770839,1218.7627457812105,970.6689024136431" fill="#ffffff"/></svg>
        <motion.img
          className='absolute z-20'
          src={team}
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
