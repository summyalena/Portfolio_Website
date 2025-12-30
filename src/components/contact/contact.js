import React from 'react';
import styles from './contact.module.css'
import styled from 'styled-components'
import FadeIn from '../../hooks/fadeIn';

const Header = styled.div`
display: flex;
justify-content: center;
 font-size: 2rem;
 font-family: 'Pacifico';
 color: var(--main-color);
`

const Contact = () => {
  return (
    <FadeIn>
    <div className={styles.container} id='contact'>
       <div className={styles.wrapper}>
       <Header>
          Contact Page
         </Header>
        <form className={styles.form}>
             <p> You can reach out to me for any questions or propositions. I will be pleased to hear from you. </p>
             <div className={styles.inputn}>
                  <label id="name_label" htmlFor="name">Name</label>
                  <input id="name" name="name" type="name" placeholder='Enter Name' />
              </div>
              <div className={styles.inputn}>
                  <label id="email_label" htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder='Enter Email' />
              </div>
              <button className={styles.button} type='submit'>
                <a href="mailto:summyalena@gmail.com">Reach out to Me</a></button>
        </form>
        </div>  
    </div>
    </FadeIn>
  )
}

export default Contact;