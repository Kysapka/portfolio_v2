import React from 'react'
import {Work} from './Work/Work'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import one from '../../u0-common/u0.1-assets/images/projects/giris.jpeg'
import s from './MyWorks.module.scss'

export const MyWorks = () => {
    const oneWork = {
        backgroundImage: `url(${one})`,
    }

    return (
        <div className={s.worksBlock}>
            <div className={s.container} id='works'>
                <Title title={'My works'}
                       titleDescription={'Check out my latest web software development portfolio projects.'}
                       id='works'
                />
                <div className={s.works}>
                    <Work style={oneWork}
                          link={'https://kysapka.github.io/social_network_ts'}
                          repLink={'https://github.com/Kysapka/social_network_ts'}
                          projectName={'Social Network'}
                          description={
                              'It is the biggest project which I update every month and learn new technologies. It helps me to be on trend.'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://kysapka.github.io/Todolist/'}
                          repLink={'https://github.com/Kysapka/Todolist'}
                          projectName={'Todo List'}
                          description={
                              'Redux-toolkit contains the best practice from all React developers. This project shows redux-toolkit and its strict limits.'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://kysapka.github.io/cards-nya-front-2-0/'}
                          repLink={'https://github.com/Kysapka/cards-nya-front-2-0'}
                          projectName={'Flash-cards'}
                          description={
                              'This project helps to study with flash cards. Joint project, a team of 3 people. Technologies that used here : TypeScript,React, Redux, Redux-thunk, Hooks, Axios.'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://kysapka.github.io/Web_chat_firebase/'}
                          repLink={'https://github.com/Kysapka/Web_chat_firebase'}
                          projectName={'Web-chat'}
                          description={
                              'A Web-chat using firebase database from google API'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://kysapka.github.io/Counter-on-React/'}
                          repLink={'https://github.com/Kysapka/Counter-on-React'}
                          projectName={'Counter app'}
                          description={
                              'A training project using the local storage for a better understanding of the work of hooks and asynchronous logic'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://kysapka.github.io/simple-react-homeworks'}
                          repLink={'https://github.com/Kysapka/simple-react-homeworks'}
                          projectName={'My training projects'}
                          description={
                              'Training projects on the development of individual components'
                          }
                    />
                </div>
            </div>
        </div>
    )
}
