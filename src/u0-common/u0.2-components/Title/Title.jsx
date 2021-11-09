import React from 'react'
import s from './Title.module.scss'

export const Title = ({title, titleDescription, className}) => {
   const finalStyle = `${className} ${s.defaultStyle}`

   return (
       <article className={finalStyle}>
          <h1 className={s.article}>
             {title}
          </h1>
          <div>
             <p>{titleDescription}</p>
          </div>
       </article>
   )
}
