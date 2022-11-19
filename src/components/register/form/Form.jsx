import React from 'react'
import { Step1 } from './Step1/Step1'
import { Step2 } from './Step2/Step2'
import { Step3 } from './Step3/Step3'
import styles from './Form.module.scss'

export function Form() {
  return (
    <>
      <section className={styles.formContainer}>
        <Step1 />
        <Step2 />
        <Step3 />
      </section>
    </>
  )
}