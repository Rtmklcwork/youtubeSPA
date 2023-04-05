import React, { useState } from 'react';



const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <div className='log'>
            <div className='inp_lgn'>
            <input 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
            />
            </div>

            <div className='inp_lgn2'>
            <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder='password'
            />
            </div>
            <div className='inp_bnt'>
            <button onClick={()=>handleClick(email, pass)}>
                {title}
            </button>
            </div>
        </div>
    )
};

export default Form;

