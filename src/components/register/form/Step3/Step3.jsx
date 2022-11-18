import React from 'react'
import styles from './Step3.module.scss'

export function Step3 () {
  return (
    <>
      <form className={styles.step3Credit} style={{display: 'none'}} data-phase="credit-card">

        <h3 className={styles.title}>付款資訊</h3> 
        <section className={styles.formBody}>

          <div className={styles.col12}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>

          <div className={styles.col12}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
          </div>

          <div className={styles.col12}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>有效期限</div>
              <input type="text" placeholder="MM/YY" />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input type="text" placeholder="123" />
            </div>
          </div>

        </section>

      </form>
    </>
  )
}