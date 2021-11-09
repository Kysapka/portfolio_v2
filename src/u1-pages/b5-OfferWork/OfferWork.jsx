import React from 'react'
import {Button} from '../../u0-common/u0.2-components/Button/Button'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import s from './OfferWork.module.scss'
import Fade from 'react-reveal/Fade'

export function OfferWork() {

    return (
        <div className={s.offerBlock}>
            <div className={s.container}>
                <Fade clear>
                    <Title title={`Let's get to work`}
                           titleDescription={'Open for your suggestions. I consider full-time offers, including remote work.'}
                    />
                    <Button name={'Hire me'} className={s.offerBtn}/>
                </Fade>
            </div>
        </div>
    )
}
