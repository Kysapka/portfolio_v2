import React from 'react'
import {Title} from '../../u0-common/u0.2-components/Title/Title'
import Fade from 'react-reveal/Fade'
import {Button} from '../../u0-common/u0.2-components/Button/Button';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';

import s from './Contact.module.scss'

export const Contact = React.memo(() => {

    let [notification, setNotification] = React.useState({flag: false, message: ''})

    const {register, handleSubmit, errors, setError} = useForm();

    const onSubmit = async (data, e) => {
        emailjs.sendForm('service_gag1lwr', 'template_gy4co6o', e.target, 'user_hIeN5iRzerHb2xlKmzrAe')
            .then(result => {
                if (result.status === 200) {
                    e.target.reset()
                    setNotification({flag: true, message: 'The message was sent successfully. Thanks!'})
                    setTimeout(() => {
                        setNotification({flag: false, message: ''})
                    }, 5000)
                } else {
                    setError('username', 'validate');
                    setNotification({flag: true, message: 'Something went wrong:(The message was not sent'})
                    setTimeout(() => {
                        setNotification({flag: false, message: ''})
                    }, 5000)
                }
            })
            .catch(err => {
                setError('username', 'validate');
                setNotification({flag: true, message: 'Something went wrong:(The message was not sent'})
                setTimeout(() => {
                    setNotification({flag: false, message: ''})
                }, 5000)
            })
    }

    return (
        <div className={s.contactBlock}>
            <div className={s.messageSuccess} style={{opacity: notification.flag ? '1' : ''}}>
                <span>{notification.message}</span>
            </div>
            <div className={s.container} id='contact'>
                <Fade clear>
                    <Title title={'Contact'}
                           titleDescription={`If you wanna get in touch, talk to me about a project collaboration or just say hi,
                       fill in the awesome form below or send an email.`}
                    />
                    <div className={s.formWrapper}>
                        <form onSubmit={handleSubmit(onSubmit)} className={s.contactForm}>
                            <input name="email"
                                   type="text"
                                   placeholder={'Email'}
                                   ref={register({
                                       required: 'This is required',
                                       pattern: {
                                           value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                           message: 'Invalid email address',
                                       },
                                   })}/>
                            {errors.email && <span className={s.notificationEmail}>{errors.email.message}</span>}
                            <input name="name"
                                   type="text"
                                   placeholder={'Name'}
                                   ref={register({
                                       required: true,
                                       validate: value => value.length >= 2
                                   })}/>
                            {errors.name &&
                            <span className={s.notificationName}>Your last name is less than 2 characters</span>}
                            <textarea name="message"
                                      placeholder={'Message'}
                                      ref={register}/>
                            <Button type="submit"
                                    newStyle
                                    button
                                    disabled={!!notification.flag}
                                    className={s.contactBtn}
                            >Send message</Button>
                        </form>
                    </div>
                </Fade>
            </div>
        </div>
    )
})
