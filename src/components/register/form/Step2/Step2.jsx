import React from 'react'
import styles from './Step2.module.scss'


export function Step2 () {
  return (
    <>
      <form className={styles.step2Shipping} style={{ display: 'none' }} data-phase="shipping">
        <h3 className={styles.title}>運送方式</h3>

        <section className={styles.formBody}>

          <label className={styles.radioGroup} data-price="0">
            <input className={styles.shippingStandard}
            id="shipping-standard"
            type="radio" 
            name="shipping" 
            checked 
            />

            <div className={styles.radioInfo}>
              <div className={styles.col12}>
                <div className={styles.shippingText}>標準運送</div>
                <div className={styles.shippingPrice}></div>
              </div>
              <div className={styles.shippingPeriod}>約 3~7 個工作天</div>
            </div>

            <div className={styles.radioBoxBorder}></div>

          </label>

          <label className={styles.radioGroup} data-price="500">
            <input className={styles.shippingStandard}
            id="shipping-dhl" 
            type="radio" 
            name="shipping" 
            />

            <div className={styles.radioInfo}>
              <div className={styles.col12}>
                <div className={styles.shippingText}>DHL 貨運</div>
                <div className={styles.shippingPrice}></div>
              </div>
              <div className={styles.shippingPeriod}>48 小時內送達</div>
            </div>

            <div className={styles.radioBoxBorder}></div>
          </label>

        </section>
      </form>
    </>
  )
}