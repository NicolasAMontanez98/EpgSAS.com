import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHandshake, FaChalkboardTeacher } from 'react-icons/fa'
import { HiDocumentReport } from 'react-icons/hi'
import { GiTeacher } from 'react-icons/gi'
import { GoGitPullRequest } from 'react-icons/go'
import { BsClipboard2DataFill, BsFileEarmarkBarGraphFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

import mipg from '../../assets/logo/mipg.png'

import tu_ventanilla from '../../assets/logo/LOGO TÚ VENTANILLA (isotipo).png'

export const Services: React.FC<any> = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const services: any[] = [
    {
      id: 'service-0',
      icon: <FaHandshake size={35} color={'#031112'}/>,
      iconDetail: <FaHandshake size={45} color={'#031112'}/>,
      title: 'Ley 951 de 2005',
      description: 'Asesoría, elaboración y apoyo en el proceso de empalme del periodo 2020-2023',
    },
    {
      id: 'service-1',
      icon: <HiDocumentReport size={35} color={'#031112'} />,
      iconDetail: <HiDocumentReport size={45} color={'#031112'} />,
      title: 'Decreto 612 de 2008',
      description: 'Elaboración, actualización y seguimiento de los planes estratégicos e institucionales',
    },
    {
      id: 'service-2',
      icon: <img src={mipg} width={'50px'} height={'25px'}/>,
      iconDetail: <img src={mipg} width={'90px'} height={'65px'}/>,
      title: 'Ley 1469 de 2017',
      description: 'Implementación del Modelo Integrado de Planeación y Gestión MIPG',
    },
    {
      id: 'service-3',
      icon: <GoGitPullRequest size={35} color={'#031112'}/>,
      iconDetail: <GoGitPullRequest size={45} color={'#031112'}/>,
      title: 'Ley 1712 de 2014',
      description: 'Seguimiento, implementación y reporte del Índice de Transparencia y Acceso a la Información Pública ITA',
    },
    {
      id: 'service-4',
      icon: <img src={tu_ventanilla} width={'50px'} height={'15px'}/>,
      iconDetail: <img src={tu_ventanilla} width={'90px'} height={'55px'}/>,
      title: 'Ley 1755 de 2015',
      description: <>Software web de control y seguimiento a las <b className='text-red-600'>PQRSD</b> <b className='text-red-600'>P</b>etición <b className='text-red-600'>Q</b>uejas <b className='text-red-600'>R</b>eclamos <b className='text-red-600'>S</b>olicitudes <b className='text-red-600'>D</b>enuncias</>,
    },
    {
      id: 'service-5',
      icon: <FaChalkboardTeacher size={35} color={'#031112'} />,
      iconDetail: <FaChalkboardTeacher size={45} color={'#031112'} />,
      title: 'Ley 909 de 2004 - Circular 100-005 de 2022 DAFP',
      description: 'Formalización del empleo - Rediseño Institucional',
    },
    {
      id: 'service-6',
      icon: <BsClipboard2DataFill size={35} color={'#031112'} />,
      iconDetail: <BsClipboard2DataFill size={45} color={'#031112'} />,
      title: 'Ley 152 de 1994',
      description: 'Seguimiento, reportes e informes a la ejecución del plan de desarrollo',
    },
    {
      id: 'service-7',
      icon: <BsFileEarmarkBarGraphFill size={35} color={'#031112'} />,
      iconDetail: <BsFileEarmarkBarGraphFill size={45} color={'#031112'} />,
      title: 'Ley 1499 de 2017',
      description: 'Implementación dela Dimensión 7 del MIPG Control Interno:',
      subItems: [
        'Programa y plan de auditoría interna.',
        'Informe semestral de Control Interno',
      ]
    },
    {
      id: 'service-8',
      icon: <GiTeacher size={35} color={'#031112'} />,
      iconDetail: <GiTeacher size={45} color={'#031112'} />,
      title: 'CONPES 3654 de 2020',
      description: 'Elaboración de informes de Gestión y la implementación de la estrategia de rendición de cuentas.',
    }
  ]

  return (
    <div className='pt-32 w-screen flex flex-col justify-end items-center'>
      <h1 className='text-6xl font-title mb-7 cursor-default'>Conoce nuestros servicios</h1>
      <h3 className='font-text text-xl mb-3 w-9/12 indent-3 text-center cursor-default'>Aquí encontrarás todos nuestros servicios y una breve descripción de los mismos.</h3>
      <ul className='w-4/5 divide-y divide-dash divide-slate-950 mb-7'>
        {services?.map((_s, i: number) => (
          <motion.li
            className={`bg-white cursor-help flex justify-start items-center gap-4 px-3 py-4 ${i === 0 ? 'rounded-t-2xl' : i === services?.length -1 ? 'rounded-b-2xl': ''} text-white`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            whileHover={{ scale: 1.05 }}
            key={_s?.id}
            layoutId={_s?.id}
            onClick={() => setSelectedId(`service-${i}`)}
          >
            {_s?.icon}
            <h3 className='text-gray-950 text-lg font-medium'>{_s?.description}</h3>
          </motion.li>
        ))}
      </ul>
      <AnimatePresence mode='popLayout'>
        {selectedId && (
          <motion.div exit={{ opacity: 0 }} className='fixed top-0 left-0 w-full h-full bg-black backdrop-blur-md bg-opacity-70 z-40 flex justify-center items-center' onClick={() => setSelectedId(null)}>
            <motion.div
              className='bg-white rounded-2xl w-6/12 px-3 pb-8 pt-4'
              layoutId={selectedId}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              <div className='flex justify-between'>
                {services?.find(_s => _s?.id === selectedId)?.iconDetail}
                <IoMdClose className='cursor-pointer' color={'#031112'} onClick={() => setSelectedId(null)} size={20}/>
              </div>
              <motion.h2 className='text-4xl font-normal font-title epg-red'>{services?.find(_s => _s?.id === selectedId)?.title}</motion.h2>
              <motion.h5 className='text-black'>{services?.find(_s => _s?.id === selectedId)?.description}</motion.h5>
              {services?.find(_s => _s?.id === selectedId)?.subItems?.length && (
                <ul className={`list-disc list-inside`}>
                  {services?.find(_s => _s?.id === selectedId)?.subItems?.map((_sub: string) => (
                    <li className='text-black'>{_sub}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
