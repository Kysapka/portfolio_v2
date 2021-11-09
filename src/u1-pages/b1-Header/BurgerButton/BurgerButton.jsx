import React from 'react'
import classNames from 'classnames'

import './BurgerButton.scss'

export const BurgerButton = ({state, changeState}) => {

   const handler = () => {
      changeState(!state)
   }

   return (
       <div className={classNames('navIcon', {
          'open': state
       })} onClick={(e) => {
          handler()
       }}>
          <span></span>
          <span></span>
          <span></span>
       </div>
   )
}