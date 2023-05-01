import React, { useState } from 'react';
import s from './Form.module.css'




const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
            <img src='youtube16.png' alt='mops'/>
            </div>
            {/* <div className={s.title}>
                {title}
            </div> */}
            <div className={s.email}>
                <input

                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email'
                />
            </div>

            <div className={s.password}>
                <input
                    type='password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder='password'
                />
            </div>
            <div>
                <button className={s.btn}

                    onClick={() => handleClick(email, pass)}>
                    <span>{title}</span>
                </button>
            </div>
        </div>
    )
};

export default Form;

