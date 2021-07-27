import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dial = (props: any) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.messages}>{props.name}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dial name='Alex' id='1'/>
                <Dial name='Andrey' id='2'/>
                <Dial name='Sveta' id='3'/>
                <Dial name='Sasha' id='4'/>
                <Dial name='Victor' id='5'/>
                <Dial name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <Message name='Hi'/>
                <Message name='How'/>
                <Message name='Yo'/>
                <Message name='Yo'/>
                <Message name='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs
