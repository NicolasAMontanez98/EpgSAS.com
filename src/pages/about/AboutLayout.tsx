import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"
import './aboutStyles.scss'

export const About: React.FC<any> = () => {
  const [index, setIndex] = useState(-1)

  const PHOTOS = [
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1683513371/team-1_ex2xc6.jpg",
       width: 1200,
       height: 1600,
       caption: "Equipo EPG S.A.S.",
    },
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1683515112/WhatsApp_Image_2023-05-07_at_10.00.34_PM_1_d6gekz.jpg",
       width: 1024,
       height: 768,
       caption: "Equipo EPG S.A.S.",
    },
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1683515105/WhatsApp_Image_2023-05-07_at_10.00.34_PM_kn4yij.jpg",
       width: 1024,
       height: 768,
       caption: "Equipo EPG S.A.S.",
    },
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1683513371/team-2_j8ouoe.jpg",
       width: 900,
       height: 1600,
      //  tags: [
      //     { value: "Ocean", title: "Ocean" },
      //     { value: "People", title: "People" },
      //  ],
       alt: "Equipo EPG S.A.S.",
    },
 ]

 const handleClick = (index: number) => setIndex(index)

  return (
    <div className='pt-32 w-screen flex flex-col justify-end items-center about-us-screen'>
      <h1 className='text-6xl font-title mb-7 cursor-default'>Quienes somos</h1>
      <h3 className='font-text text-xl mb-3 w-9/12 indent-3 text-justify cursor-default'>
        Somos una empresa legalmente
        constituida conformada por un equipo de
        profesionales en derecho, administración
        pública e ingeniería; entre otras.
      </h3>
      <h3 className='font-text text-xl mb-3 w-9/12 indent-3 text-justify cursor-default'>
        Hace 12 años acompañamos a nuestros
        municipios y empresas públicas en el
        departamento de Boyacá y
        Cundinamarca, los cuales nos han
        permitido, asesorarlos y acompañarlos
        para mejorar su gestión por medio de un
        arduo y eficiente trabajo en equipo.
      </h3>
      <hr className='w-9/12 border-2 my-8' style={{ borderColor: '#9A0606' }} />
      <div className='h-3/12 text-right'>
        <span className='text-4xl font-quote w-6/12 text-center my-0 cursor-default' id='quote-typing'>"La excelencia no es una habilidad, es una actitud"</span>
        <h3 className='font-title text-xl mb-3 w-6/12 indent-3 text-right epg-red mb-16 cursor-default'>Ralph Marston</h3>
      </div>
      <hr className='w-9/12 border-2 my-8' style={{ borderColor: '#9A0606' }} />
      <div className='py-4'>
        <Gallery images={PHOTOS} onClick={handleClick} enableImageSelection={false} defaultContainerWidth={90}/>
        <Lightbox
          slides={PHOTOS}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  )
}
