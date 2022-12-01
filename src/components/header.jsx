import React from 'react'
import {ReactComponent as Toggle} from '../icons/toggle.svg'
import { ReactComponent as Search } from '../icons/search.svg'
import { ReactComponent as Cart } from '../icons/cart.svg'
import { ReactComponent as Moon } from '../icons/moon.svg'
import { ReactComponent as Sun } from '../icons/sun.svg'
import { ReactComponent as Logo } from '../icons/logo.svg'

//import styles from './header.module.scss'


export function Header () {
  return (
    <>
      <header class="site-header">
        <div class="header-container mx-auto">
          {/*<!-- navbar-toggle -->*/}
          <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
          <label for="navbar-toggle" class="burger-container">
            <Toggle/>
          </label>

          {/* <!-- navbar-menu -->*/}
          <nav class="navbar-menu">
            <ul class="nav-list site-menu-list mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">男款</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">女款</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">最新消息</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">客製商品</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">聯絡我們</a>
              </li>
            </ul>
            <ul class="nav-list site-action-list">
              {/*<!-- search -->*/}
              <li class="nav-item">
                <Search/>
              </li>
              {/*<!-- cart -->*/}
              <li class="nav-item">
                <Cart/>
              </li>
              <li id="theme-toggle" class="nav-item">
                {/* <!-- moon --> */}
                <Moon/>
                {/*<!-- sun -->*/}
                <Sun/>
              </li>
            </ul>
          </nav>

          {/*<!-- logo -->*/}
          <a class="header-logo-container" href="#">
            <Logo/>
          </a>
        </div>
      </header>
    </>            
  )
}
