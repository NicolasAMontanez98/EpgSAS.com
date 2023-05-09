import React from 'react'
import { motion } from 'framer-motion'
import { FaChessKnight, FaChessPawn, FaChessQueen, FaChessRook, FaChessBishop } from 'react-icons/fa'

export const Experiences: React.FC<any> = () => {
  const experiences = [
    {
      title: 'Evento de Gestión de Conocimiento de prácticas significativas a nivel nacional del Departamento Nacional de Planeación DNP del 2020',
      description: 'Fuimos seleccionados a nivel nacional junto con cuatro municipios más, para la participación en el evento de Gestión de Conocimiento de prácticas significativas a nivel nacional del Departamento Nacional de Planeación DNP, con la presentación del proceso de “Seguimiento del Plan de Desarrollo Territorial del Municipio de Motavita Boyacá” como buena práctica con elementos innovadores de la gestión pública, proceso que fue reconocido como experiencia exitosa a nivel nacional.',
      col: 2,
    },
    {
      title: 'Reconocimiento a nivel nacional en esfuerzo de mejora resultados FURAG vigencia 2020',
      description: 'En La Victoria Boyacá se logró obtener resultados significativos en la mejora de la implementación del Modelo Integrado de Planeación y Gestión MIPG, teniendo en cuenta que en la medición del FURAG para la vigencia 2020 se obtuvo un índice de desempeño municipal de 61.1 en contraste con el resultado de FURAG vigencia 2019 de 16.8, evidenciando un aumento de 44.3 puntos, impactando de forma positiva en el desempeño administrativo de la entidad el cual fue resaltado por el Departamento de la Función Pública.',
      col: 2,
    },
    {
      title: 'Reconocimiento por parte del departamento Administrativo de la función pública DAFP por la mejora de los resultados FURAG vigencia 2020',
      description: 'De igual manera se realizó la labor de implementación del Modelo Integrado de Planeación y Gestión MIPG en el municipio de Paz de Río Boyacá, obteniendo un avance significativo para la vigencia 2020 con un índice de desempeño municipal de 76.0 y en contraste con el resultado de FURAG vigencia 2019 de 36.7 se evidencia un aumento de 39.3 puntos, mejorando la gestión administrativa de la entidad.',
      col: 1,
    },
    {
      title: 'Mejora resultados FURAG vigencia 2021 GÁMEZA- BOYACÁ',
      description: 'Medición del FURAG para la vigencia 2021 se obtuvo un índice de desempeño municipal de 64.7 en contraste con el resultado de FURAG vigencia 2020 de 54.6, evidenciando un aumento de 10.1 puntos.',
      col: 2,
    },
    {
      title: 'Mejora resultados FURAG vigencia 2021 LA VICTORIA - BOYACÁ',
      description: 'Medición del FURAG para la vigencia 2021 se obtuvo un índice de desempeño municipal de 66.3 en contraste con el resultado de FURAG vigencia 2020 de 61.1, evidenciando un aumento de 5.2 puntos.',
      col: 1,
    },
    {
      title: 'Mejora resultados FURAG vigencia 2021 MOTAVITA - BOYACÁ',
      description: 'Medición del FURAG para la vigencia 2021 se obtuvo un índice de desempeño municipal de 81.1 en contraste con el resultado de FURAG vigencia 2020 de 74.7, evidenciando un aumento de 6.4 puntos.',
      col: 1,
    },
    {
      title: 'Mejora resultados FURAG vigencia 2021 PAZ DE RÍO- BOYACÁ',
      description: 'Medición del FURAG para la vigencia 2021 se obtuvo un índice de desempeño municipal de 81.3 en contraste con el resultado de FURAG vigencia 2020 de 76.0, evidenciando un aumento de 5.3 puntos.',
      col: 2,
    },
  ]

  const chessPieces = [
    <motion.span><FaChessQueen color='#9A0606' size={55} /></motion.span>,
    <motion.span><FaChessKnight color='#9A0606' size={55} /></motion.span>,
    <motion.span><FaChessRook color='#9A0606' size={55} /></motion.span>,
    <motion.span><FaChessBishop color='#9A0606' size={55} /></motion.span>,
    <motion.span><FaChessPawn color='#9A0606' size={55} /></motion.span>,
  ]

  return (
    <div className='pt-32 w-screen flex flex-col justify-end items-center about-us-screen'>
      <h1 className='text-6xl font-title mb-7 cursor-default'>Experiencias</h1>
      <h3 className='font-text text-xl mb-3 w-9/12 indent-3 text-justify cursor-default'>
        Señor(a) Alcalde(sa), nos permitimos hacer una presentación
        de nuestro recorrido y experiencia en el sector público:
        Los siguientes son los resultados exitosos que se han logrado con un equipo de
        profesionales capacitados y asertivos, de la mano del liderazgo de los
        mandatarios y mandatarias y un excelente trabajo en equipo.
      </h3>
      <div className='w-9/12 my-8 grid grid-flow-row grids-cols-4 gap-4 rounded-lg'>
        {experiences?.map((_e, i: number) => (
          <motion.article className={`col-span-${_e?.col} bg-white rounded-lg p-4 relative flex`} whileHover={{ scale: 1.1 }}>
            <div className='w-1/12 flex items-center justify-start'>
              {i <= chessPieces?.length-1 ? chessPieces[i] : chessPieces[i - chessPieces?.length]}
            </div>
            <div className='w-11/12'>
              <h2 className='text-black text-xl font-title cursor-default'>{_e?.title}</h2>
              <p className='text-black cursor-default'>{_e?.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
