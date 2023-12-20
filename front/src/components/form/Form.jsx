import { useState,useEffect } from 'react';
import Validation from './Validation';
import styles from './Form.module.css';

const Form =({login})=>{

    const [userData,setUserData]= useState({
        email:'',
        password:''
    })

    const [errors,setErrors]=useState({})

    const handleChange=(event)=>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
    }

    useEffect(()=>{
        setErrors(Validation(userData))
    },[userData])

    const handleSubmit =(event)=>{
        event.preventDefault()
        login(userData)

    }


    return(
        <div className={styles.body}>

                <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.content}>
                    <label className={styles.label}>Email</label>
                    <br />
                    <input 
                    className={styles.input}
                        type="text"
                        name="email" 
                        value={userData.email} 
                        onChange={handleChange} 
                    />
                    {errors.email !== '' ? <p>{errors.email}</p>
                    :''}
                    <br></br>

                    <label className={styles.label} >Password</label>
                    <br/>
                    <input
                    className={styles.input}
                        type='password'
                        name="password" 
                        value={userData.password}
                        onChange={handleChange} 
                    />
                    {errors.password !== '' ? <p>{errors.password}</p>
                    :''}
                    <br/>
                    <button 
                    className={styles.button}
                    type='submit'
                    disabled={!userData.email || !userData.password||errors.email||errors.password}
                    >SUBMIT</button>

                </div>

            </form>
        </div>
    )

}
export default Form;