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

      <div className={styles.productContainer} key={item.id}>
        <img className={styles.imgContainer} src={item.img} alt={item.name} />
        <div className={styles.productInfo}>
          <div className={styles.productName}>{item.name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <Minus className={styles.minus} />
              <span className={styles.productCount}>{item.quantity}</span>
              <Plus className={styles.plus} />
            </div>
          </div>
          <div className={styles.price}>{item.price}</div>
        </div>
      </div>
  })

return (
  <>
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList}>{listItems} </section>
      <CartInfo name="shipping" text="運費" price="免費" />
      <CartInfo name="total" text="小計" price="$0" />
    </section>

  </>
)
}

