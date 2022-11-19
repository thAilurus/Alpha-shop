import React from 'react'
import {ReactComponent as PgComplete} from '../../../icons/pg-complete.svg'  // import SVG files
import styles from './StepProgress.module.scss'


export function StepProgress () {
  return (
    <>
        <section className={styles.progressContainer}>
          <span className={styles.progressGroup} data-phase="address">
            <span className={styles.iconContainer}>
              <span className={styles.textDone}>1</span>
              <PgComplete className={styles.icon} />
            </span>
            <span className={styles.progressLabel}>寄送地址</span>
          </span>
          <span className={styles.progressBar} data-order="1"></span>

          <span className={styles.progressGroup} data-phase="shipping">
            <span className={styles.iconContainer}>
              <span className={styles.textUndone}>2</span>
              <PgComplete className={styles.iconUndone} />
            </span>
            <span className={styles.progressLabelUndone}>運送方式</span>
          </span>
          <span className={styles.progressBarUndone} data-order="2"></span>

          <span class={styles.progressGroup} data-phase="credit-card">
            <span className={styles.iconContainer}>
              <span className={styles.textUndone}>3</span>
              <PgComplete className={styles.iconUndone} />
            </span>
            <span className={styles.progressLabelUndone}>付款資訊</span>
          </span>

        </section>
    </>
  )
}