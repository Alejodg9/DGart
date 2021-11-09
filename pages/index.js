import Head from 'next/head'
import Image from 'next/image'
import Revealer from '../components/Revealer/Revealer';
import React, { useState, useEffect,useRef } from 'react';
import s from './index.module.scss'
import SeriesHome from '../components/SeriesHome/SeriesHome';




const Component = (props) => {

   const[bubbleSizes, setBubbleSizes]= useState();
   const[loading, setLoading]=useState(true);
   
   useEffect(()=>{
      setBubbleSizes(randomPixel())
      console.log(bubbleSizes)
      setLoading(false);
   },[loading])


   return (<>
   {loading
   ?
   ""
   :
   <div className={s.container}>
      {/* <Revealer img={'/cuadro2.png'} height={`${bubbleSizes}px`} width={`${bubbleSizes}px`}/> */}
      <Revealer img={'/cuadro1.png'} height="300px" width="300px"/>
      
     
   </div>
   }
   <SeriesHome />

  </>)
}

export default Component


const circle = <svg width="1347" height="1347" viewBox="0 0 1347 1347" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1347" height="1347" rx="673.5" fill="#2E2C2C"/>
</svg>

const randomPixel = () =>{
   var pixel=Math.random() * (400 - 10) + 10;
   return (pixel)
}