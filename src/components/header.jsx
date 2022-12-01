import React from 'react'
import {ReactComponent as Toggle} from '../icons/toggle.svg'
import { ReactComponent as Search } from '../icons/search.svg'
import { ReactComponent as Cart } from '../icons/cart.svg'
import { ReactComponent as Moon } from '../icons/moon.svg'
import { ReactComponent as Sun } from '../icons/sun.svg'
import { ReactComponent as Logo } from '../icons/logo.svg'

//import styles from './header.module.scss'
import styles from './ header.module.scss'

export function Header () {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={styles.headerContainer}>

          {/*<!-- navbar-toggle -->*/}
          <input id="navbar-toggle" className={styles.navbarToggle} type="checkbox" />
          <label for="navbar-toggle" className={styles.burgerContainer}>
            <Toggle/>
          </label>

          {/* <!-- navbar-menu -->*/}
          <nav className={styles.navbarMenu}>
            <ul className={styles.navListMenu}>
              <li className={styles.navItem}>
                <a class="nav-link" href="#">男款</a>
              </li>
              <li className={styles.navItem}>
                <a class="nav-link" href="#">女款</a>
              </li>
              <li className={styles.navItem}>
                <a class="nav-link" href="#">最新消息</a>
              </li>
              <li className={styles.navItem}>
                <a class="nav-link" href="#">客製商品</a>
              </li>
              <li className={styles.navItem}>
                <a class="nav-link" href="#">聯絡我們</a>
              </li>
            </ul>
            <ul className={styles.navListAction}>
              {/*<!-- search -->*/}
              <li className={styles.navItem}>
                <Search/>
              </li>
              {/*<!-- cart -->*/}
              <li className={styles.navItem}>
                <Cart/>
              </li>
              <li id="theme-toggle" className={styles.navItem}>
                {/* <!-- moon --> */}
                <Moon/>
                {/*<!-- sun -->*/}
                <Sun/>
              </li>
            </ul>
          </nav>

          {/*<!-- logo -->*/}
          <a className={styles.logoContainer} href="#">
            <Logo/>
          </a>
          
        </div>
      </header>
    </>            
  )
}
