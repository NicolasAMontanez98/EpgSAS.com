import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"

export const Infographs: React.FC<any> = () => {
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
    <div className='pt-32 w-full flex flex-col justify-center items-center about-us-screen'>
      <h1 className='sm:text-6xl text-4xl font-title mb-7 cursor-default'>Contenido</h1>
      <h3 className='font-text text-xl mb-3 w-9/12 indent-3 text-center cursor-default'>Aquí encontrarás todo el contenido que hemos creado:</h3>
      <div className='w-3/4'>
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
