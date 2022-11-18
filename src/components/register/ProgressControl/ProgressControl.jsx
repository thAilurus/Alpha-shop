import React from 'react'
import styles from './ProgressControl.module.scss'

// import SVG files
import { ReactComponent as RightArrow } from '../../../icons/right-arrow.svg' 
import { ReactComponent as LeftArrow } from '../../../icons/left-arrow.svg' 



export function ProgressControl () {
  return (
    <>
    {/* 只先刻出第一步畫面: 只有下一步按鈕 */}
      <section className={styles.progressControlContainer}>

        <section className={styles.buttonGroup} data-phase="address">
          <button className={styles.next}>
            下一步
            <svg class="cursor-point">
              <RightArrow className={styles.cursorPoint}/>
            </svg>
          </button>
        </section>

        {/*
        <section class="button-group col col-12" data-phase="shipping">
          <button class="prev">
            <svg class="cursor-point">
              
            </svg>
            上一步
          </button>
          <button class="next">
            下一步
            <svg class="cursor-point">
              
            </svg>
          </button>
        </section> */}

        {/*
        <section class="button-group col col-12" data-phase="credit-card">
          <button class="prev">
            <svg class="cursor-point">
             
            </svg>
            上一步
          </button>
          <button class="next">
            確認下單
          </button>
      </section> */}

      </section>
    </>
  )
}