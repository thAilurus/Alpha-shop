import React from 'react'
import styles from './Cart.module.scss'
import { items } from './CartData.jsx'
import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as Plus } from '../../icons/plus.svg'

function CartInfo({ name, text, price }) {
  return (
    <>
      <section className={styles.cartInfo} name={name} >
        <div className={styles.text}>{text}</div>
        <div className={styles.price}>{price}</div>
      </section>
    </>
  )
}


export function Cart() {
  const listItems = items.map((item) => {

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

  })

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

      <CartInfo name="shipping" text="運費" price="免費" />
      <CartInfo name="total" text="小計" price="$0" />


    </section>

  </>
)
}

