import React from 'react'
import { StepProgress } from './StepProgress/StepProgress'
import { Form } from './form/Form'
import { ProgressControl } from './ProgressControl/ProgressControl'
import styles from './register.module.scss'

export function Register() {
  return (
    <>
      <section className={styles.registerContainer} data-phase="1" data-total-price="0">
        <h2 className={styles.registerTitle}>結帳</h2>
        <StepProgress />
        <Form />

      </section>
      <ProgressControl />
      
    </>
  )
}