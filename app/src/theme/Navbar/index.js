/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// import useHideableNavbar from '@theme/hooks/useHideableNavbar';

import React, {useCallback, useState} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from "./styles.module.css";

function NavLink({to, href, label, position, ...props}) {
  const toUrl = useBaseUrl(to);
  return (
    <span className={styles.link}>
      <Link
      className={styles.navItem}
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
    </span>
  );
}

function Navbar() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {baseUrl, themeConfig = {}} = siteConfig;
  const {navbar = {}} = themeConfig;
  const {logo = {}, links = []} = navbar;
  const logoUrl = useBaseUrl(logo.src);

  return (
    <header className={styles.nav}>
        <nav>
        <a data-testid="a" className={styles.logo} href="https://shipyard.run/img">
          <img src="/img/shipyard_horizontal_small.png" width="180"/>
        </a>  
        <div className={styles.links}>
          <ul>
          
          </ul>
          <ul>
            <li className={styles.button}><a href="https://shipyard.run" data-testid="a-raw">Shipyard</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;