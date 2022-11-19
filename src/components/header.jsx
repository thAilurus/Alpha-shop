import React from 'react'


export function Header () {
  return (
    <>
      <header class="site-header">
        <div class="header-container mx-auto">
          
          <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
          <label for="navbar-toggle" class="burger-container">
            <svg class="icon-toggle cursor-point">
              <use xlink:href="#svg-icon-toggle"></use>
            </svg>
          </label>
          
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

              <li class="nav-item">
                <svg class="nav-icon cursor-point">
                  <use xlink:href="#svg-icon-search"></use>
                </svg>
              </li>

              <li class="nav-item">
                <svg class="nav-icon cursor-point">
                  <use xlink:href="#svg-icon-cart"></use>
                </svg>
              </li>
              <li id="theme-toggle" class="nav-item">

                <svg class="nav-icon cursor-point">
                  <use xlink:href="#svg-icon-moon"></use>
                </svg>
                <svg class="nav-icon cursor-point">
                  <use xlink:href="#svg-icon-sun"></use>
                </svg>
              </li>
            </ul>
          </nav>

          <a class="header-logo-container" href="#">
            <svg class="icon-logo cursor-point">
              <use xlink:href="#svg-icon-logo"></use>
            </svg>
          </a>
        </div>
      </header>

    </>
  )
}