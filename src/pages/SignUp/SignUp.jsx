import React,{ useState, useEffect } from 'react';
import './SignUp.css'
const SignUp = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [emailDirty, setEmailDirty] = useState(false)
     const [passwordDirty, setPasswordDirty] = useState(false)
     const [emailError, setEmailError] = useState('Email не может быть пустым')
     const [passwordError, setPasswordError] = useState(' Password не может быть пустым')
     const [formValid, setFormValid] = useState(false)

      useEffect(() => {
          if(emailError || passwordError){
            setFormValid(false)
          } else{
            setFormValid(true)
          }
      }, [emailError, passwordError])


        const emailHandler = (e) =>{
          setEmail(e.target.value)
          const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный емейл')
          }else{
            setEmailError("")
          }

        }
        const passwordHandler = (e) =>{
          setPassword(e.target.value)
          if(e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Пароль должен быть длинне 3 и меньше 8')
            if(!e.target.value){
            setPasswordError('Пароль не может быть пустым')
 
            }
          } else{
            setPasswordError('')
          }
        }

      const blurHandler = (e) =>{
        switch(e.target.name){
          case 'emaill':
              setEmailDirty(true)
              break

              case 'password':
                setPasswordDirty(true)
                break;
        }
      }

    return (
        <div className='SignUp'>
          <form className='form1'>
            <h1 className='h1'>Регистрация </h1>
            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            <input className='email' onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='emaill' type="text" placeholder='Enter your email....' />

            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <input className='password' onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name='password' placeholder='Enter your password....' />
            <button className='buttons' disabled ={!formValid} type='submit'>Registration</button>
          </form> 
        </div>
    );
}

export default SignUp;