import React from 'react'
import s from './BurgerNav.module.scss'
import {Link} from 'react-scroll'

export const BurgerNav = (props) => {

   const onClickHandler = () => {
      props.setState(false)
   }

   const Show = {
      right: 0
   }

   const Hide = {
      right: '-900px'
   }

   return (
       <ul className={s.mainMenu}
           style={props.state ? Show : Hide}>
          <li className={s.menuItem}>
             <Link activeClass={s.active}
                   onClick={onClickHandler}
                   to="main"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
             >Main</Link>
          </li>
          <li className={s.menuItem}>
             <Link activeClass={s.active}
                   onClick={onClickHandler}
                   to="skills"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
             >Skills</Link>
          </li>
          <li className={s.menuItem}>
             <Link activeClass={s.active}
                   onClick={onClickHandler}
                   to="works"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
             >Projects</Link>
          </li>
          <li className={s.menuItem}>
             <Link activeClass={s.active}
                   onClick={onClickHandler}
                   to="contact"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
             >Contacts</Link>
          </li>
       </ul>
   )
}
