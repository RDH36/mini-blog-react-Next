import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/img1.jpg'
import img2 from '../public/assets/img2.jpg'
import img3 from '../public/assets/img3.jpg'
import Head from 'next/head'

export default function galery() {
  return (
      <>
        <Head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>CODE.io | Galery</title>
        </Head>
        <div>
            <Image layout='responsive' src={img1} width='4612' height='3075' placeholder='blur'/>
            <Image layout='responsive' src={img2} width='4402' height='3302' placeholder='blur'/>
            <Image layout='responsive' src={img3} width='6000' height='4000' placeholder='blur'/>
        </div>
    </>
  )
}
