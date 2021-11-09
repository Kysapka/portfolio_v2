import React from 'react'
import {Button} from '../../../u0-common/u0.2-components/Button/Button'

import s from './Work.module.scss'

export const Work = ({projectName, description, link, repLink, ...props}) => {

    return (
        <article className={s.workItem}>
            <div className={s.workBlock}>
                <div className={s.projectImg} style={props.style}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button className={s.projectBtn} button link={'https://vk.com/19sergey_k'}>Watch</Button>
                    </a>
                </div>
                <div className={s.description}>
                    <h3>{projectName}</h3>
                    <p>{description}</p>
                    <a href={repLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </article>
    )
}
