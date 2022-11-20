import React from 'react'
import { Register } from './register/register'
import styles from './main.module.scss'

export function Main () {
  return (
    // 之後main.scss要對mainContainer做style的調整
    <div className={styles.mainContainer}> 
      <Register/>
      {/*<Cart/>*/}
    </div>
  )
}