import React from 'react'

// import svg files
import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as Plus } from '../../icons/plus.svg'

// import scss styles
import styles from './cart.module.scss'

export function Cart() {
  return (
    <>
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>

        <section className={styles.productList} data-total-price="0">
          <div className={styles.productContainer} data-count="0" data-price="3999">
            <img className={styles.imgContainer} alt='product1'  src="./public/images/product-1.jpg" />
            <div className={styles.productInfo}>
              <div className={styles.productName}>破壞補丁修身牛仔褲</div>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                  <Minus className={styles.minus} />
                  <span className={styles.productCount}></span>
                  <Plus className={styles.plus} />
                </div>
              </div>
              <div className={styles.price}></div>
            </div>
          </div>
          <div class="product-container col col-12" data-count="0" data-price="1299">
            <img class="img-container" alt='product2' src="./public/images/product-2.jpg" />
            <div class="product-info">
              <div class="product-name">刷色直筒牛仔褲</div>
              <div class="product-control-container">
                <div class="product-control">
                  <Minus />
                  <span class="product-count"></span>
                  <Plus />
                </div>
              </div>
              <div class="price"></div>

            </div>
          </div>
        </section>

        <section className={styles.cartShipping}>
          <div className={styles.text}>運費</div>
          <div className={styles.price}></div>
        </section>
        <section className={styles.cartTotal} >
          <div className={styles.text}>小計</div>
          <div className={styles.price}></div>
        </section>
      </section>

    </>
  )
}

