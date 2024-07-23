import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"
import './aboutStyles.css'

export const About: React.FC<any> = () => {
  const [index, setIndex] = useState(-1)

  const PHOTOS = [
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1721755281/1_zwmjvg.png",
       width: 500,
       height: 500,
       caption: "Nuestra lider Ing. Ind.",
    },
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1721755281/2_pdaxvu.png",
       width: 500,
       height: 500,
       caption: "Nuestra gerente juridica",
    },
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1721755282/3_yuy541.png",
       width: 500,
       height: 500,
       caption: "Nuestro Adm. Público",
    },
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1721755284/4_xyos5z.png",
       width: 500,
       height: 500,
       alt: "Nuestro Financiero Int.",
    },
    {
       src: "https://res.cloudinary.com/dkrcosw87/image/upload/v1721755286/5_d1flnc.png",
       width: 500,
       height: 500,
       alt: "Nuestro Gestora Cial.",
    },
 ]

 const handleClick = (index: number) => setIndex(index)

  return (
    <div className='py-32 w-screen flex flex-col justify-end items-center about-us-screen'>
      <h1 className='sm:text-6xl text-4xl text-center font-title mb-7 cursor-default'>Quienes somos</h1>
      <h3 className='font-text text-xl mb-3 w-9/12 indent-3 text-left cursor-default'>
        Somos una empresa legalmente
        constituida conformada por un equipo de
        profesionales en derecho, administración
        pública e ingeniería; entre otras.
      </h3>
      <h3 className='font-text text-xl mb-3 w-9/12 indent-3 text-left cursor-default'>
        Hace 12 años acompañamos a nuestros
        municipios y empresas públicas en el
        departamento de Boyacá y
        Cundinamarca, los cuales nos han
        permitido, asesorarlos y acompañarlos
        para mejorar su gestión por medio de un
        arduo y eficiente trabajo en equipo.
      </h3>
      <hr className='w-9/12 border-2 my-8' style={{ borderColor: '#9A0606' }} />
      <div className='sm:h-3/12 h-1/2 w-4/6'>
        <span className='sm:text-4xl text-2xl font-quote sm:w-6/12 w-full text-center my-0 cursor-default' id='quote-typing'>"La excelencia no es una habilidad, es una actitud"</span>
        <h3 className='font-title text-xl mt-3 w-full indent-3 text-left epg-red cursor-default'>Ralph Marston</h3>
      </div>
      <hr className='w-9/12 border-2 my-8' style={{ borderColor: '#9A0606' }} />
      <div className='py-4 w-9/12'>
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
