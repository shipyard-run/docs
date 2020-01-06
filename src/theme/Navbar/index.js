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
        <a data-testid="a" className={styles.logo} href="/">
          <svg width="125" height="30" viewBox="0 0 125 30" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M75.0267 14.7775V22.8798H77.9341V14.4679C77.9341 12.3945 77.2432 11.0359 75.3127 11.0359C74.0735 11.0359 72.358 11.4889 71.0711 12.1562V6.12708L68.1634 6.53205V22.8798H71.0711V14.8252C72.1197 14.2772 73.3826 13.848 74.0972 13.848C74.7648 13.848 75.0267 14.1579 75.0267 14.7775Z"
                    fill="#000">
                </path>
                <path
                    d="M42.5695 16.1834V22.8797H45.5722V7.00865H42.5695V13.5383H36.6834V7.00865H33.681V22.8797H36.6834V16.1834H42.5695Z"
                    fill="#000">
                </path>
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M54.1749 22.8797H56.558V15.2302C56.558 12.3228 55.4858 11.0359 51.8395 11.0359C50.5526 11.0359 48.9561 11.2505 47.8602 11.5842L48.2175 13.8003C49.2421 13.586 50.3859 13.443 51.4342 13.443C53.2933 13.443 53.6507 13.8956 53.6507 15.1825V16.398H50.8625C48.5034 16.398 47.4786 17.3033 47.4786 19.6627C47.4786 21.6645 48.3841 23.118 50.5052 23.118C51.6728 23.118 52.912 22.7847 53.9606 22.0935L54.1749 22.8797ZM51.5061 18.4952H53.6507V20.211C53.1027 20.5206 52.3164 20.8066 51.4585 20.8066C50.5526 20.8066 50.2906 20.4493 50.2906 19.6387C50.2906 18.7572 50.5526 18.4952 51.5061 18.4952Z"
                    fill="#000">
                </path>
                <path
                    d="M62.1821 23.118C60.9429 23.118 59.2511 22.832 58.1788 22.4507L58.5838 20.2346C59.5607 20.5206 60.8476 20.7352 62.0391 20.7352C63.326 20.7352 63.5166 20.4492 63.5166 19.5674C63.5166 18.8527 63.3736 18.4951 61.4909 18.0422C58.6551 17.3512 58.3215 16.6363 58.3215 14.3962C58.3215 12.0608 59.3464 11.0359 62.6587 11.0359C63.7309 11.0359 65.1368 11.1789 66.1377 11.4411L65.8521 13.7529C64.9705 13.5859 63.5643 13.4193 62.6587 13.4193C61.3958 13.4193 61.1812 13.7052 61.1812 14.4199C61.1812 15.3494 61.2525 15.4208 62.8254 15.826C66.0664 16.684 66.3763 17.1129 66.3763 19.496C66.3763 21.7361 65.6854 23.118 62.1821 23.118Z"
                    fill="#000">
                </path>
                <path d="M80.0791 22.8797H82.9862V11.2741H80.0791V22.8797Z" fill="#000">
                </path>
                <path d="M80.0791 9.62994H82.9862V6.26994H80.0791V9.62994Z" fill="#000">
                </path>
                <path
                    d="M90.6597 6.77047C86.7038 6.77047 85.0119 8.46231 85.0119 11.3697V18.519C85.0119 21.426 86.7038 23.1179 90.6597 23.1179C92.1372 23.1179 93.6621 22.9276 94.9726 22.5936L94.6393 19.9962C93.3524 20.2345 91.8509 20.4015 90.755 20.4015C88.6815 20.4015 88.0146 19.6865 88.0146 17.9947V11.894C88.0146 10.2018 88.6815 9.48689 90.755 9.48689C91.8509 9.48689 93.3524 9.65386 94.6393 9.89218L94.9726 7.29475C93.6621 6.96082 92.1372 6.77047 90.6597 6.77047Z"
                    fill="#000">
                </path>
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M100.931 23.118C96.9512 23.118 95.8786 20.9259 95.8786 18.5425V15.6114C95.8786 13.2286 96.9512 11.0359 100.931 11.0359C104.91 11.0359 105.983 13.2286 105.983 15.6114V18.5425C105.983 20.9259 104.91 23.118 100.931 23.118ZM100.931 13.5146C99.3816 13.5146 98.786 14.2055 98.786 15.5164V18.6381C98.786 19.9487 99.3816 20.6399 100.931 20.6399C102.48 20.6399 103.075 19.9487 103.075 18.6381V15.5164C103.075 14.2055 102.48 13.5146 100.931 13.5146Z"
                    fill="#000">
                </path>
                <path
                    d="M110.63 15.3973C111.678 14.7298 112.584 14.2055 113.704 13.7052L113.418 11.0361C112.393 11.3221 111.011 12.1323 110.368 12.5613L110.177 11.2744H107.723V22.8796H110.63V15.3973Z"
                    fill="#000">
                </path>
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M124.727 19.0192C124.727 21.5929 123.583 23.1181 120.891 23.1181C119.866 23.1181 118.698 22.9751 117.793 22.7845V27.5744L114.886 27.9796V11.2743H117.197L117.483 12.2515C118.508 11.5126 119.699 11.036 121.153 11.036C123.488 11.036 124.727 12.4182 124.727 15.0636V19.0192ZM117.793 20.33C118.555 20.497 119.532 20.6397 120.366 20.6397C121.415 20.6397 121.82 20.1394 121.82 19.0908V14.9919C121.82 14.039 121.463 13.5147 120.39 13.5147C119.437 13.5147 118.412 13.9913 117.793 14.5629V20.33Z"
                    fill="#000">
                </path>
                <path d="M0 7.19579L11.4553 0.58728V5.55192L4.30398 9.68052V25.5537L0 23.069V7.19579Z" fill="#000">
                </path>
                <path
                    d="M16.0285 0.58728V13.2291H11.4553V8.51084L7.15165 10.9956V27.1919L11.4553 29.6829V17.0771H16.0285V21.7641L20.3321 19.2788V3.07229L16.0285 0.58728Z"
                    fill="#000">
                </path>
                <path d="M27.4838 23.0789L16.0285 29.6875V24.7228L23.1798 20.5939V4.72074L27.4838 7.20576V23.0789Z"
                    fill="#000">
                </path>
            </svg>
            <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6643 0L0 6.71763V6.74817V22.901L4.397 25.4354V9.25201L11.6643 5.06876V0Z" fill="#000">
                </path>
                <path
                    d="M16.336 0V12.8856H11.6642V8.06116L7.29776 10.5955V27.1148L11.6642 29.6492V16.7941H16.336V21.5575L20.7025 19.0537V2.53438L16.336 0Z"
                    fill="#000">

                </path>
                <path d="M16.3358 29.6515L28.0001 22.9033V6.75044L23.6031 4.21606V20.3689L16.3358 24.5827V29.6515Z"
                    fill="#000">

                </path>
            </svg>
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