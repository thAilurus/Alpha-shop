import React from 'react'
import styles from './cart.module.scss'

// import svg files
import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as Plus } from '../../icons/plus.svg'

export function Cart() {
  return (
    <>
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>

        <section className={styles.productList} data-total-price="0">
          <div className={styles.productContainer} data-count="0" data-price="3999">
            <img className={styles.imgContainer} src="./images/product-1.jpg" alt='product1' />
            <div className={styles.productInfo}>
              <div className={styles.productName}>破壞補丁修身牛仔褲</div>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                  <Minus className={styles.minus} />
                  <span className={styles.productCount}>0</span>
                  <Plus className={styles.plus} />
                </div>
              </div>
              <div className={styles.price}>$3999</div>
            </div>
          </div>
          <div className={styles.productContainer} data-count="0" data-price="1299">
            <img className={styles.imgContainer} src="./images/product-2.jpg" alt='product2' />
            <div className={styles.productInfo}>
              <div className={styles.productName}>刷色直筒牛仔褲</div>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                  <Minus className={styles.minus} />
                  <span className={styles.productCount}>0</span>
                  <Plus className={styles.plus} />
                </div>
              </div>
              <div className={styles.price}>$1299</div>

            </div>
          </div>
        </section>

        <section className={styles.cartInfo}>
          <section className={styles.cartShipping}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>免運</div>
          </section>
          <section className={styles.cartTotal} >
            <div className={styles.text}>小計</div>
            <div className={styles.price}>$0</div>
          </section>
        </section>

      </section>

    </>
  )
}

