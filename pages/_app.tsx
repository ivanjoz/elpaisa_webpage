import '@/styles/globals.css'
import '@/styles/inicio.css'
import Head from 'next/head'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // initGlobals()
  },[]);
  
  return <>
    <Head>
      <title>El Paisa | Restaurant Turístico</title>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta property="og:locale" content="es_ES"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="logo_amg7.jpg"/>
      <meta property="og:image:secure_url" content="logo_amg7.jpg"/>
      <meta property="og:image:width" content="500"/>
      <meta property="og:image:height" content="500"/>
      <meta property="og:image:alt" content="Matiz Logo"/>
      <meta name="description" content="El Paisa Internacional | Somos una cadena de restaurantes, de platos marinos y criollos, que brindamos un ambiente agradable para diversos gustos, basados en un servicio personalizado, productos de calidad. En Trujillo, Perú."/>
      <link rel="canonical" href="https://elpaisa.pe/"/>
      <meta property="og:title" content="El Paisa Internacional | Somos una cadena de restaurantes, de platos marinos y criollos, que brindamos un ambiente agradable para diversos gustos, basados en un servicio personalizado, productos de calidad. En Trujillo, Perú."/>
      <meta property="og:description" content="El Paisa Internacional | Somos una cadena de restaurantes, de platos marinos y criollos, que brindamos un ambiente agradable para diversos gustos, basados en un servicio personalizado, productos de calidad. En Trujillo, Perú."/>
      <meta property="og:url" content="https://elpaisa.pe/"/>
      <meta property="og:site_name" content="El Paisa | Restaurant Turístico"/> 
      <link rel="stylesheet" href="/libs/fontello-embedded.css"/>
    </Head>
    <Component {...pageProps} />
  </>
}
