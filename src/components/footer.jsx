import React from 'react'
import { ReactComponent as Logo } from '../icons/logo.svg'
import { ReactComponent as FB } from '../icons/facebook.svg'
import { ReactComponent as IG } from '../icons/instagram.svg'
import { ReactComponent as Whatsapp } from '../icons/whatsapp.svg'

import styles from './footer.module.scss'


export function Footer() {
  return (
    <>
      <footer className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogoContainer}>
            <Logo className={styles.footerLogo} />
          </div>
          <section className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>客戶服務</h2>
            <div className={styles.sectionContent}>
              <a className={styles.pageLink} href="#">運送說明</a>
              <a className={styles.pageLink} href="#">退換貨相關</a>
              <a className={styles.pageLink} href="#">付款資訊</a>
              <a className={styles.pageLink} href="#">FAQ</a>
            </div>
          </section>
          <section className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>關於我們</h2>
            <div className={styles.sectionContent}>
              <a className={styles.pageLink} href="#">品牌故事</a>
              <a className={styles.pageLink} href="#">媒體聯繫</a>
              <a className={styles.pageLink} href="#">Press kit</a>
            </div>
          </section>
          <section className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>資訊</h2>
            <div className={styles.sectionContent}>
              <a className={styles.pageLink} href="#">隱私權政策</a>
              <a className={styles.pageLink} href="#">Cookie</a>
              <a className={styles.pageLink} href="#">GDPR</a>
            </div>
          </section>
          <section className={styles.footerSection}>
            <h2 className={styles.sectionTitle}>追蹤 ALPHA Shop</h2>
            <div className={styles.sectionContent}>
              <div className={styles.telInfo}>+886 02123-45678</div>
              <div className={styles.socialIconGroup}>
                <FB className={styles.socialIcon} />
                <IG className={styles.socialIcon} />
                <Whatsapp className={styles.socialIcon} />
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}