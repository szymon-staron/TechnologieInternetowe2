import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './styles.scss';

export const Konto = () => {
    const history = useHistory();
    const [account, setAccount] = useState({ login: '', password: '' });
    const [error, setError] = useState('')

    const handleLoginAccount = (e) => {
        console.log(e.target)
        const { name, value } = e.target
        setAccount((prev) => ({ ...prev, [name]: value }))
    }

    const submitRedirect = (e) => {
        e.preventDefault();
        if (account.login !== 'admin' && account.password !== 'haslo') {
            setError('login lub haslo sa nieprawidlowe')
        }
        if (account.login === 'admin' && account.password === 'haslo') {
            history.push('/panel')

        }


    }

    return <section>
        <article className='login'>
            <form className='login__form'>
                <fieldset className='login__fieldset'>
                    <h3 className='login__panel'>Panel Logowania</h3>
                    <div className='login__field'>
                        <label className='login__label'  >Login:</label>
                        <input className='login__input' name='login' type='text' placeholder='Login' value={account.login} onChange={handleLoginAccount} />
                        {error && <p className='login__error'>{error}</p>}
                    </div>
                    <div className='login__field'>
                        <label className='login__label'>Hasło:</label>
                        <input type='password' placeholder='Hasło' name='password' value={account.password} onChange={handleLoginAccount} className='login__input' />
                        {error && <p className='login__error'>{error}</p>}
                    </div>
                    <button className='login__button' onClick={submitRedirect}>zaloguj się</button>
                </fieldset>
            </form>
        </article>
    </section>
}