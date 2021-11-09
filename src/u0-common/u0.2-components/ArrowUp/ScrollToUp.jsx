import React from 'react'
import ScrollToTop from 'react-scroll-up'

export const ScrollToUp = () => {

   const finalStyle = {
      position: 'fixed',
      bottom: 50,
      right: 30,
      color: 'white',
      cursor: 'pointer',
      background:'var(--main-headline-text)',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'linear',
      transitionDelay: '0s',
      zIndex: 103,
      width:'50px',
      height:'50px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:'50%'
   }

   return (
       <ScrollToTop showUnder={160} style={finalStyle}>
          <span>UP</span>
       </ScrollToTop>
   )
}
