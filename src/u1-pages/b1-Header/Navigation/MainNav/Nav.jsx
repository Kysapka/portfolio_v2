import React from 'react'

import s from './Nav.module.scss'
import {Link} from 'react-scroll'

export const Nav = () => {

   return (
       <div className={s.nav}>
          <nav className={s.navbar}>
             <ul className={s.mainMenu}>
                <li className={s.menuItem}>
                   <Link activeClass={s.active}
                         to="main"
                         spy={true}
                         smooth={true}
                         offset={-71}
                         duration={500}
                   >Main</Link>
                </li>
                <li className={s.menuItem}>
                   <Link activeClass={s.active}
                         to="skills"
                         spy={true}
                         smooth={true}
                         offset={-71}
                         duration={500}
                   >Skills</Link>
                </li>
                <li className={s.menuItem}>
                   <Link activeClass={s.active}
                         to="works"
                         spy={true}
                         smooth={true}
                         offset={-71}
                         duration={500}
                   >Projects</Link>
                </li>
                <li className={s.menuItem}>
                   <Link activeClass={s.active}
                         to="contact"
                         spy={true}
                         smooth={true}
                         offset={-71}
                         duration={500}
                   >Contacts</Link>
                </li>
             </ul>
          </nav>
       </div>
   )
}
