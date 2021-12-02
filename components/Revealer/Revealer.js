import s from './Revelaer.module.scss';
import React, { useState, useEffect,useRef } from 'react';
import useMouse from '@react-hook/mouse-position'

const Revealer = ({img, height, width}) =>{
   const ref = React.useRef(null)
   
   const mouse = useMouse(ref, {
     enterDelay: 100,
     leaveDelay: 100,
   })


      return (
         <div className={s.container} ref={ref}>
           <div className={s.spotlight}
              style={{left:mouse.x-150 , top:mouse.y-150, background:`url(${img}) 0% 0% no-repeat fixed`, height:height, width:width}}
            ></div>
            {/* <div className={s.palette_conatainer} className={s.main_title}>
            <div style={{color:`rgba(${mouse.y/4}, 0, ${mouse.x}, ${mouse.x/1000})`}}>        D   </div>
            <div style={{color:`rgba(${mouse.y/4}, ${mouse.y}, ${mouse.y}, ${mouse.x/1000})`}}> a </div>
            <div style={{color:`rgba(${mouse.x/4}, ${mouse.y}, 0, ${mouse.x/1000})`}}>n</div>
            <div style={{color:`rgba(${mouse.x/4}, ${mouse.x}, 0, ${mouse.x/1000})`}}>i</div>
            <div style={{color:`rgba(${mouse.y/4}, ${mouse.y}, ${mouse.x}, ${mouse.x/1000})`}}> e </div>
            <div style={{color:`rgba(${mouse.y/4},0, ${mouse.x}, ${mouse.x/1000})`}}>       l     </div>
            <div style={{color:`rgba(${mouse.y/4}, ${mouse.y}, ${mouse.x}, ${mouse.x/1000})`}}>  </div>
            <div style={{color:`rgba(${mouse.y/4}, 0, ${mouse.x}, ${mouse.x/1000})`}}>           </div>
            <div style={{color:`rgba(${mouse.y/4}, ${mouse.y}, ${mouse.y}, ${mouse.x/1000})`}}> g </div>
            <div style={{color:`rgba(${mouse.x/4}, ${mouse.y}, 0, ${mouse.x/1000})`}}>l</div>
            <div style={{color:`rgba(${mouse.x/4}, ${mouse.x}, 0, ${mouse.x/1000})`}}>u</div>
            <div style={{color:`rgba(${mouse.y/4}, ${mouse.y}, ${mouse.x}, ${mouse.x/1000})`}}> z </div>
            <div style={{color:`rgba(${mouse.y/4},0, ${mouse.x}, ${mouse.x/1000})`}}>       m     </div>
            <div style={{color:`rgba(${mouse.y/4}, ${mouse.y}, ${mouse.x}, ${mouse.x/1000})`}}> m </div>
            <div style={{color:`rgba(${mouse.x/4}, ${mouse.x}, 0, ${mouse.x/1000})`}}>u</div>
            <div style={{color:`rgba(${mouse.y/4}, ${mouse.y}, ${mouse.y}, ${mouse.x/1000})`}}> g </div>
            </div> */}
            {/* <h1>{mouse.y}</h1> */}
            <h1 className={s.main_title}>Daniel<br/> Gluzmann<br/> Arte</h1>
         </div>
   )
}

export default Revealer;