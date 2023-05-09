import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"

export const Infographs: React.FC<any> = () => {
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
      <h1 className='text-6xl font-title mb-7 cursor-default'>Contenido</h1>
      <h3 className='font-text text-xl mb-3 w-9/12 indent-3 text-center cursor-default'>Aquí encontrarás todo el contenido que hemos creado:</h3>
      <Gallery images={PHOTOS} onClick={handleClick} enableImageSelection={false} defaultContainerWidth={90}/>
      <Lightbox
        slides={PHOTOS}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  )
}
