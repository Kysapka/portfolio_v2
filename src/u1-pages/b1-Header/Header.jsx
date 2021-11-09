import React, {useState} from 'react'

import {Nav} from './Navigation/MainNav/Nav'
import {BurgerNav} from './Navigation/BurgerNav/BurgerNav'
import {Button} from '../../u0-common/u0.2-components/Button/Button'
import {BurgerButton} from './BurgerButton/BurgerButton'

import s from './Header.module.scss'
import Fade from 'react-reveal/Fade'

export const Header = () => {

   let [visible, setVisible] = useState(false)

   const finalStyle = visible ? `${s.fullOverlay} ${s.activeFullOverlay}` : s.fullOverlay

   return (
       <section className={s.headerArea}>
          <Fade clear>
             <div className={s.headerWrapper}>
                <div className={s.headerLeft}>
                   <Nav/>
                </div>
                <div className={s.headerRight}>
                   <div className={finalStyle}></div>
                   <div className={s.headerBtnWrapper}>
                      <Button name={`LET'S TALK`} className={s.headerBtn} newStyle={true}/>
                   </div>
                   <div className={s.hamburgerMenu}>
                     <span className={s.menuTrigger}>
                        <BurgerButton changeState={setVisible} state={visible}/>
                     </span>
                      <BurgerNav state={visible} setState={setVisible}/>
                   </div>
                </div>
             </div>
          </Fade>
       </section>
   )
}
